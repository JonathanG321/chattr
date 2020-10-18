const Sequelize = require('sequelize');
const sequelize = require('../db/connection');
const bcrypt = require('bcrypt');

const User = sequelize.define(
  'user',
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        async isUnique(username) {
          const user = await User.findOne({ where: { username } });
          if (user) {
            throw new Error('Username already exists');
          }
        },
        notEmpty: {
          msg: 'Username cannot be empty',
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        async isUnique(email) {
          const user = await User.findOne({ where: { email } });
          if (user) {
            throw new Error('Email already exists');
          }
        },
        notEmpty: {
          msg: 'Email cannot be empty',
        },
        isEmail: {
          msg: 'Must input a valid email',
        },
      },
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: true,
      },
    },
    avatar: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue:
        'https://banner2.cleanpng.com/20180401/dbq/kisspng-user-profile-computer-icons-profile-5ac09245049c32.0935523415225697970189.jpg',
      validate: {
        isUrl: true,
      },
    },
    passwordDigest: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    passwordConfirmation: {
      type: Sequelize.VIRTUAL,
      validate: {
        notEmpty: {
          msg: 'Password Confirmation cannot be empty',
        },
      },
    },
    password: {
      type: Sequelize.VIRTUAL,
      validate: {
        notEmpty: {
          msg: 'Password cannot be empty',
        },
        len: {
          args: [8, Infinity],
          msg: 'Password must be at least 8 characters long',
        },
        isConfirmed() {
          if (this.password !== this.passwordConfirmation) {
            throw new Error('Password must match Password Confirmation');
          }
        },
      },
    },
  },
  {
    hooks: {
      beforeBulkCreate(instances, options) {
        instances.map((instance) => {
          instance.passwordDigest = bcrypt.hashSync(instance.password, 10);
        });
      },
      beforeValidate(instance, options) {
        instance.passwordDigest = bcrypt.hashSync(instance.password, 10);
      },
    },
    defaultScope: {
      attributes: { exclude: ['passwordDigest'] },
    },
  },
);

module.exports = User;

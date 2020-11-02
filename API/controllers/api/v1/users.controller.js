const User = require('../../../models/user.model');
const { RecordNotFoundError } = require('../../api.controller');

module.exports = {
  async create(request, response, next) {
    try {
      const { username, password = '', passwordConfirmation, email = '', avatar } = request.body;
      const newUser = {
        username,
        avatar,
        password,
        passwordConfirmation,
        email: email.toLowerCase(),
      };
      const user = await User.create(newUser);
      request.session.userId = user.id;
      response.json(user);
    } catch (e) {
      next(e);
    }
  },
  async update(request, response, next) {
    try {
      const { id } = request.params;
      const { username, avatar } = request.body;
      const newUser = {
        username,
        avatar,
      };
      const user = await User.update(newUser, { where: id });
      response.json(user);
    } catch (e) {
      next(e);
    }
  },
  async show(request, response, next) {
    try {
      const { id } = request.params;
      const user = await User.findOne({ where: { id } });
      if (!user) {
        throw new RecordNotFoundError(User, id);
      }
      response.json(user);
    } catch (e) {
      next(e);
    }
  },
  async currentUser(request, response, next) {
    try {
      response.json(response.locals.currentUser);
    } catch (e) {
      next(e);
    }
  },
};

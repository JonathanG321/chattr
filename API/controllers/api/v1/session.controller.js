const User = require('../../../models/user.model');
const { RecordNotFoundError } = require('../../api.controller');
const bcrypt = require('bcrypt');

module.exports = {
  async create(request, response, next) {
    try {
      const { email: _email = 'INVALID', password } = request.body;
      const email = _email.toLowerCase();
      const user = await User.findOne({
        where: { email },
        attributes: { include: ['passwordDigest'] },
      });
      const isCorrectPassword = !!user && (await bcrypt.compare(password, user.passwordDigest));
      if (!isCorrectPassword) {
        throw new RecordNotFoundError(User, undefined, 'Email or Password is incorrect');
      }
      request.session.userId = user.id;
      const userSecure = await User.findOne({
        where: { id: user.id },
      });
      response.json(userSecure);
    } catch (error) {
      next(error);
    }
  },
  destroy(request, response, next) {
    try {
      delete request.session.userId;
      response.json({ status: 200, ok: true });
    } catch (e) {
      next(e);
    }
  },
};

const Joi = require('joi');

const BAD_REQUEST = 400;
const INTERNAL_ERROR = 500;

const schema = Joi.object({
  username: Joi.string().min(8),
  email: Joi.string().email({ tlds: { allow: true } }).required(),
  password: Joi.string().min(6).required(),
});

const UserValidation = (req, res, next) => {
  const { username, email, password } = req.body;
  const { error } = schema.validate({ username, email, password });
  try {
    if (error) {
      return res.status(BAD_REQUEST).json({ message: error.details[0].message });
    }
    next();
  } catch (err) {
    res.status(INTERNAL_ERROR).json({ message: err.message });
  }
};

module.exports = UserValidation;

const Joi = require('joi');

const BAD_REQUEST = 400;
const INTERNAL_ERROR = 500;

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: true } }).required(),
  password: Joi.string().min(6).required(),
});

const LoginValidation = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = schema.validate({ email, password });
  try {
    if (error) {
      return res.status(BAD_REQUEST).json({ message: error.details[0].message });
    }
  } catch (err) {
    res.status(INTERNAL_ERROR).json({ message: err.message });
  }
  next();
};

module.exports = LoginValidation;

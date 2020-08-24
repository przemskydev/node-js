//validation
const Joi = require('@hapi/joi');


const registerValidation = data => {

  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(5).required()
  })

  return schema.validate(data)
}

const lognValidation = data => {

  const schema = Joi.object({
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(5).required()
  })

  return schema.validate(data)
}

module.exports.lognValidation = lognValidation;
module.exports.registerValidation = registerValidation;
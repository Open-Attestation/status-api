const Joi = require("@hapi/joi");

const updateRequestSchema = Joi.object({
  status: Joi.number()
    .min(0)
    .integer()
    .required()
});

const validateUpdateRequest = input => Joi.assert(input, updateRequestSchema);

module.exports = { validateUpdateRequest };

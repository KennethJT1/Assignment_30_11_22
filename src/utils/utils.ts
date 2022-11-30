import Joi from "joi";

export const registerSchema = Joi.object().keys({
    description: Joi.string().min(25).max(250).required(),
    status: Joi.boolean().required()
  });

export const updateSchema = Joi.object().keys({
    description: Joi.string().min(25).max(250).required(),
    status: Joi.boolean().required()
  });

  export const option = {
    abortEarly: false,
    errors: {
      wrap: {
        label: "",
      },
    },
  };
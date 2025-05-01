import Joi from "joi";

export const createProfileSchemas = Joi.object({
  surname: Joi.string().required(),
  images: Joi.string(),
  profession: Joi.string().required(),
  bio: Joi.string().required(),
  location: Joi.string(),
  status: Joi.string().valid("true", "false"),
});

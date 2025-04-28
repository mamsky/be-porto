import Joi from "joi";

export const createProfileSchemas = Joi.object({
  surname: Joi.string().required(),
  images: Joi.string().required(),
  profession: Joi.string().required(),
  bio: Joi.array(),
});

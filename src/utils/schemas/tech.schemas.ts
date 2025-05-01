import Joi from "joi";

export const TechSchemas = Joi.object({
  name: Joi.string().required(),
  images: Joi.string().required(),
});

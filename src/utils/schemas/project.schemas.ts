import Joi from "joi";

export const ProjectSchemas = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  techstack: Joi.array().items(Joi.string().required()).min(1).required(),
  demo: Joi.string().allow("", null).optional(),
  github: Joi.string().allow("", null).optional(),
  images: Joi.string(),
});

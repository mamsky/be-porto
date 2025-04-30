import Joi from "joi";

export const ProjectSchemas = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  techstack: Joi.array().items(Joi.string().required()).min(1).required(),
  demo: Joi.string().optional(),
  github: Joi.string().optional(),
  images: Joi.string().optional(),
});

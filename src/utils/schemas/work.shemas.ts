import Joi from "joi";

export const WorkSchema = Joi.object({
  title: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.array().items(Joi.string().required()).min(1).required(),
  techstack: Joi.array().items(Joi.string().required()).min(1).required(),
  date: Joi.string().required(),
  images: Joi.string(),
});

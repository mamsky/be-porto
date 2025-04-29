import Joi from "joi";

export const arrTechSchemas = Joi.object({
  tech: Joi.string().required(),
});

export const createProjectSchemas = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  tech: Joi.array().items(arrTechSchemas),
});

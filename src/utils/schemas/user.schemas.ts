import Joi from "joi";

export const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const authSchema = Joi.object({
  username: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().required(),
});

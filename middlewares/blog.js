import Joi from "joi";
import ObjectId from "joi-objectid";
Joi.objectId = ObjectId(Joi);

const schema = Joi.object({
  title: Joi.string().required().min(8).max(255),
  description: Joi.string().required().min(10).max(255),
  content: Joi.string().required().min(30),
});

const idSchema = Joi.object({
  id: Joi.objectId(),
});

export const blogValidate = function (req, res, next) {
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

export const idValidate = function (req, res, next) {
  const { error, value } = idSchema.validate(req.body.id);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

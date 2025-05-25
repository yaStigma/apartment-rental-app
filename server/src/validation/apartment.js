import Joi from 'joi';

const apartmentSchema = Joi.object({
  title: Joi.string().min(3).max(90).required().messages({
    'string.empty': 'Title cannot be empty.',
    'string.min': 'Title must be at least 3 characters long.',
    'string.max': 'Title must be at most 90 characters long.',
    'any.required': 'Title is a required field.',
  }),
  description: Joi.string().min(3).max(355).required().messages({
    'string.empty': 'Description cannot be empty.',
    'string.min': 'Description must be at least 3 characters long.',
    'string.max': 'Description must be at most 355 characters long.',
    'any.required': 'Description is a required field.',
  }),
  price: Joi.number().required().messages({
    'number.base': 'Price must be a number.',
    'any.required': 'Price is a required field.',
  }),
  numberOfRooms: Joi.number().valid(1, 2, 3).required().messages({
    'number.base': 'Number of rooms must be a number.',
    'any.only': 'Number of rooms must be 1, 2, or 3.',
    'any.required': 'Number of rooms is a required field.',
  }),
  photos: Joi.array()
    .items(
      Joi.object({
        url: Joi.string().uri().optional().allow(''),
        uploadedAt: Joi.date().default(() => new Date()),
      }),
    )
    .optional(),
});

export default apartmentSchema;

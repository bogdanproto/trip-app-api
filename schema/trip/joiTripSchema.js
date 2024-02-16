import Joi from 'joi';

export const joiTripCreateShema = Joi.object({
  item: Joi.string().required().messages({
    'any.required': 'item_required',
    'string.empty': 'item_empty',
  }),

  startDate: Joi.string().required().messages({
    'any.required': 'startDate_required',
    'string.empty': 'startDate_empty',
  }),
  endDate: Joi.string().required().messages({
    'any.required': 'endDate_required',
    'string.empty': 'endDate_empty',
  }),
});

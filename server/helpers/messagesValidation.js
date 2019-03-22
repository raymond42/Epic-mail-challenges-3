import Joi from 'joi';


const validateMessages = {

  validation(newMessages) {
    const newMesageSchema = {
      subject: Joi.string().min(2).required(),
      message: Joi.string().required(),
      status: Joi.string().required(),
      receiver_id: Joi.number().required(),
    };
    return Joi.validate(newMessages, newMesageSchema);
  },

};

export default validateMessages;

import Joi from 'joi';



const validateMessages = {

    validation (newMessages){

        const newMesageSchema ={
            subject: Joi.string().min(2).required(),
            message: Joi.string().required(),
            parentMessageId: Joi.number().required(),
            status:Joi.string().required(),
        };
        return Joi.validate(newMessages, newMesageSchema);
},

};

export default validateMessages;

import Joi from 'joi';


// signup
const validateUserSignup = {

    validation (newUser){

        const newUserSchema ={
            email: Joi.string().required(),
            firstName: Joi.string().min(3).required(),
            lastName: Joi.string().min(3).required(),
            password: Joi.string().min(6).max(12).required(),
        };
        return Joi.validate(newUser, newUserSchema);
},

};

export default validateUserSignup;

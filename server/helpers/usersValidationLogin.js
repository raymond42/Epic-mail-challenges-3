import Joi from 'joi';


// login
const validateLogin = {

    validation (user){

        const userSchema ={
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(12).required(),
        };
        return Joi.validate(user, userSchema);
},

};

export default validateLogin;

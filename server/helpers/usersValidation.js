import Joi from 'joi';



const validateUsers = {

    validation (newUser){

        const newUserSchema ={
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
        };
        return Joi.validate(newUser, newUserSchema);
},

};

export default validateMessages;

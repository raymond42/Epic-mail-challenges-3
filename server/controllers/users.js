import users from '../models/users';
import validateUserSignup from '../helpers/usersValidationSignup';
import validateLogin from '../helpers/usersValidationLogin';
import lodash from 'lodash'


// signup
export const signup = ((req,res) =>{
    const {error} = validateUserSignup.validation(req.body);
    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }
    
    const _id = parseInt(users.length + 1);
    const newUser ={
        id: _id,
        email: req.body.email,
        firsName: req.body.firsName,
        lastName: req.body.lastName,
        password: req.body.password,
    }

    users.push(newUser);
    res.status(201).json({
        status: 201,
        data: lodash.pick(newUser,['id','email','firstName','lastName']) 
});

})

// login
export const login = ((req,res) =>{
    const {error} = validateLogin.validation(req.body);
    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }
    
    const _id = parseInt(users.length + 1);
    const user ={
        id: _id,
        email: req.body.email,
        password: req.body.password,
    }

    users.push(user);
    res.status(201).json({
        status: 201,
        data: lodash.pick(user,['id','email',]) 
});

})


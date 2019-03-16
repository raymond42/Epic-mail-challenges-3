import users from '../models/users';
import validateUserSignup from '../helpers/usersValidationSignup';
import validateLogin from '../helpers/usersValidationLogin';
import lodash from 'lodash'


// signup
export const signup = ((req,res) =>{
    const user = users.find(email => email.email === req.body.email)
    if (user) return res.status(400).send({ status: 400, error: 'The email is already registered' })

    const {error} = validateUserSignup.validation(req.body);
    if (error){
        res.status(400).send({ status: 201,errr: error.details[0].message});
        return;
    }
    
    const _id = parseInt(users.length + 1);
    const newUser = {
        id: _id,
        email: req.body.email,
        firsName: req.body.firsName,
        lastName: req.body.lastName,
        password: req.body.password,
    }

    users.push(newUser);
    res.status(201).send({
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

    const contact = users.find(contact => contact.email === req.body.email && contact.password === req.body.password)
    if (contact) {
         res.status(200).send(contact)
    }else{
    res.status(404).json({
        status: 404,
        message: "user not found"
    })
}

})

// get a contact
export const getContact = ((req,res)=>{
    const contact = users.find(contact => contact.id === parseInt(req.params.id));
    if(!contact) {res.status(404).send('contact not found');
    
}else{
    res.status(200).json({
        status: 200,
        data: contact,
        })
    }
   
   });

//    get all contacts

export const getAllContacts = ((req,res)=>{
    if(users.length <= 0) 
    {
        res.status(404).send('no contact found');

    }else{

        res.status(200).json({
            status: 200,
            data: users
            
        })
    }
   
   });


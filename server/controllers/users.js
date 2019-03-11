import users from '../models/users';
import validateUsers from '../helpers/messagesValidation';


export const signup = ((req,res,next) =>{
    const {error} = validateUsers.validation(req.body);
    if (error){
        res.status(400).send(error.details[0].user);
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
        data: newUser,
    })
    next();
});

// import users from '../models/users';
// import validateUsers from '../helpers/usersValidation';

// export const signup = (req, res, next) => {
//   const { error } = validateUsers(req.body);
//   if (error) {
//     return res.status(400).send({
//       status: 400,
//       error: error.details[0].message
//     });
//   }
//   const newUser = {
//     id: parseInt(users.length + 1, 10),
//     email: req.body.email || '',
//     firstname: req.body.firstname || '',
//     lastname: req.body.lastname || '',
//     password: req.body.password || ''
//   };
//   users.push(newUser);
//   return res.send(({
//     status: 201,
//     data: [newUser]
//   }));
// };
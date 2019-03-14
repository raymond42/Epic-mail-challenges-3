import messages from '../models/messages';
import validateMessages from '../helpers/messagesValidation';

// compose/post messages
export const composeMessages =((req, res,) =>{
    const {error} = validateMessages.validation(req.body);
    if (error){
        res.status(400).send(error);
        return;
    } 
    const _id = parseInt(messages.length + 1);
    const newMessages = {
        id: _id,
        createdOn: new Date(),
        subject: req.body.subject,
        message: req.body.message,
        parentMessageId: req.body.parentMessageId,
        status:req.body.status
    }

    messages.push(newMessages);
    res.status(201).json({
        status: 201,
        data: newMessages
    })

});

// get all messages
export const getMessages = ((req,res)=>{
    if(!messages.length) res.status(404).send('no email found');
    res.status(200).json({
        status: 200,
        data: messages
        
    })
   
   });

//    get one message
   export const getOneMessage = ((req,res)=>{
    const email = messages.find(email => email.id === parseInt(req.params.id));
    if(!email){
         res.status(404).send('email you are looking for is not found');
        }else{
    res.status(200).json({
        status: 200,
        data: email
    
    })
}
   
   });

//    get read messages
   export const getReadMessages = ((req,res)=>{
       const readMessages = messages.filter(email => email.status ==='read');
       if(!readMessages.length) res.status(404).send('there is no read email');
       res.status(200).json({
           status: 200,
           data: readMessages
       });
   });

//    get unread messages
   export const getUnReadMessages = ((req,res)=>{
    const UnReadMessages = messages.filter(email => email.status ==='unread');
    if(!UnReadMessages.length) res.status(404).send('there is no unread email');
    res.status(200).json({
        status: 200,
        data: UnReadMessages,
    });
});

// get received emails
export const getReceivedMessages = ((req,res)=>{
    const receivedMessages = messages.filter(email => email.status ==='received');
    if(!receivedMessages.length) res.status(404).send('there is no received email');
    res.status(200).json({
        status: 200,
        data: receivedMessages,
    });
});

//    delete message
export const deleteMessage = ((req,res)=>{
    const deleteEmail = messages.find(email => email.id === parseInt(req.params.id));
    
    if(!deleteEmail){
         res.status(400).send({status: 400,error: 'no email to delete'});

}else{

    const index = messages.indexOf(deleteEmail);
    messages.splice(index, 1)
    res.status(200).send({
        status: 200,
        data:{
            id: req.params.id,
            message: 'email deleted'
        }
    });
}
   
   });

//  get sent messages
export const getSentMessages = ((req,res)=>{
    const sentMessages = messages.filter(email => email.status ==='sent');
    if(!sentMessages.length) res.status(404).send('there is no sent email');
    res.status(200).json({
        status: 200,
        data: sentMessages,
    });
})

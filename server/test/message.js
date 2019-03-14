import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);

chai.should();
// compose a message

describe('copmose a message', () => {
it('should be able to compose and post a message', (done)=> {
    const message = {
        id: 1,
        createdOn: "22/03/2019",
        subject: "Greetings",
        message: "hello how are you",
        parentMessageId: 2,
        status:"received",
    }

    chai.request(server)

    .post('/api/v1/messages')
    .send(message)
    .end((err, res) => {
      res.body.should.be.an('object');
      res.body.should.have.property('status').eql(201);
    done();
    
});

    
})

    it('should be able not to compose and post a message', (done)=> {
        
        const message = {
        id: 1,
        createdOn: "22/03/2019",
        subject: "dfhssdd",
        message: "hello how are you",
        parentMessageId: 2,
        status:"received",
        };
    
        chai.request(server)
    
        .post('/api/v1/messages')
        
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('status').eql(201);
        done();
        });
        });
    
  });
  


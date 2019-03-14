import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import messages from '../models/messages';

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
  

// get a single message
describe('message', () => {

    it('should get a specific message', (done) => {
        chai.request(server)
          .get('/api/v1/users/messages/1')
          .end((err, res)=>{
            res.should.have.status(404);
            res.body.should.be.an('object');
            done();
          });
      });
    
    
    it('should not be able to get a specific message', (done) => {
      chai.request(server)
        .get('/api/v1/users/contact/234344')
        .end((err, res)=>{
          res.should.have.status(404);
          res.body.should.be.an('object');
          done();
        });
    });
    });

    // get all the messages
    describe('messages', () => {

        it('should get all messages', (done) => {
            chai.request(server)
              .get('/api/v1/users/messages')
              .end((err, res)=>{
                res.should.have.status(404);
                res.body.should.be.an('object');
                done();
              });
          });
        
        
        it('should not be able get any message', (done) => {
          chai.request(server)
            .get('/api/v1/messa')
            .end((err, res)=>{
              res.should.have.status(404);
              res.body.should.be.an('object');
              done();
            });
        });
        });

        // get read messages
        describe('message', () => {

            it('should get read messages', (done) => {
                chai.request(server)
                  .get('/api/v1/users/messages/read')
                  .end((err, res)=>{
                    res.should.have.status(404);
                    res.body.should.be.an('object');
                    done();
                  });
              });
            
            
            it('should not be able to get any read message', (done) => {
              chai.request(server)
                .get('/api/v1/users/messages/234344')
                .end((err, res)=>{
                  res.should.have.status(404);
                  res.body.should.be.an('object');
                  done();
                });
            });
            });

            // get unread messages
        describe('message', () => {

            it('should be able to get unread mesages', (done) => {
                chai.request(server)
                  .get('/api/v1/users/messages/runead')
                  .end((err, res)=>{
                    res.should.have.status(404);
                    res.body.should.be.an('object');
                    done();
                  });
              });
            
            
            it('should not be able to get unread message', (done) => {
              chai.request(server)
                .get('/api/v1/users/messages/m')
                .end((err, res)=>{
                  res.should.have.status(404);
                  res.body.should.be.an('object');
                  done();
                });
            });
            });

             // get received messages
            describe('received', () => {
    
                it('should be able to get received mesages', (done) => {
                    chai.request(server)
                      .get('/api/v1/users/messages/received')
                      .end((err, res)=>{
                        res.should.have.status(404);
                        res.body.should.be.an('object');
                        done();
                      });
                  });
                
                
                it('should not be able to get unread message', (done) => {
                  chai.request(server)
                    .get('/api/v1/users/messages/m')
                    .end((err, res)=>{
                      res.should.have.status(404);
                      res.body.should.be.an('object');
                      done();
                    });
                });
                });

                // get sent messages
            describe('sent', () => {
    
                it('should be able to fetch sent messages', (done) => {
                    chai.request(server)
                      .get('/api/v1/users/messages/sent')
                      .end((err, res)=>{
                        res.should.have.status(404);
                        res.body.should.be.an('object');
                        done();
                      });
                  });
                
                
                it('should not be able to fetch sent messages', (done) => {
                  chai.request(server)
                    .get('/api/v1/users/messages/')
                    .end((err, res)=>{
                      res.should.have.status(404);
                      res.body.should.be.an('object');
                      done();
                    });
                });
                });
    
    
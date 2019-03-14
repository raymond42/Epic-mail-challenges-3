import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);

chai.should();

// get all users

describe('users', () => {

it('should get all users', (done) => {
    chai.request(server)
      .get('/api/v1/users/contacts')
      .end((err, res)=>{
        res.should.have.status(200);
        res.body.should.be.an('object');
        done();
      });
  });


it('should not get any user /', (done) => {
  chai.request(server)
    .get('/api/v1/users')
    .end((err, res)=>{
      res.should.have.status(404);
      res.body.should.be.an('object');
      done();
    });
});
});

// get a specific contact

describe('user', () => {

  it('should get a specific user /', (done) => {
      chai.request(server)
        .get('/api/v1/users/contact/1')
        .end((err, res)=>{
          res.should.have.status(200);
          res.body.should.be.an('object');
          done();
        });
    });
  
  
  it('should not get a specific user /', (done) => {
    chai.request(server)
      .get('/api/v1/users/contact/234344')
      .end((err, res)=>{
        res.should.have.status(404);
        res.body.should.be.an('object');
        done();
      });
  });
  });

  // login

describe('login', () => {

  it('should be able to login', (done) => {
    const user = {
      email: "eric@gmail.com",
      password: "dhjfddjdsj"
    };
      chai.request(server)
        .post('/api/v1/users/login')
        .send(user)
        .end((err, res)=>{
          res.should.have.status(200);
          res.body.should.be.an('object');
          done();
        });
    });
  
  
  it('should not be able to login', (done) => {
    chai.request(server)
      .post('/api/v1/users/login')
      .end((err, res)=>{
        res.should.have.status(400);
        res.body.should.be.an('object');
        done();
      });
  });

});

// signup
describe('signup', () => {

  it('should be able to signup', (done) => {
    const user = {
      email: "eric@gmail.com",
      firsName: "frank",
      lastName: "fred",
      password: "dhjfddjdsj"
    };
      chai.request(server)
        .post('/api/v1/users/signup')
        .send(user)
        .end((err, res)=>{
          
         res.should.be.an('object');
         res.body.should.be.a.property('status').eql(201);
          done();
        });
    });
  
  
  it('should not be able to signup', (done) => {
    const newUser ={
      email: "",
      firsName: "Christian",
      lastName: "Fred",
      password: "sdfdsdfdfsd"
  }
    chai.request(server)
      .post('/api/v1/users/signup')
      .send(newUser)
      .end((err, res)=>{
        res.should.have.status(400);
        res.body.should.be.an('object');
        done();
      });
  });

});
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';


chai.use(chaiHttp);

chai.should();

// get all users

describe('users', () => {

it('should get all users /', (done) => {
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

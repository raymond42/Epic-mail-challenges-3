import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';


chai.use(chaiHttp);

chai.should();

// get all users

describe('list all the users', () => {

it('should list ALL users /', (done) => {
    chai.request(server)
      .get('/api/v1/users/contacts')
      .end((err, res)=>{
        res.should.have.status(200);
        res.body.should.be.an('object');
        done();
      });
  });
});

// not getting any
// describe('not getting any user', () => {

//   it('should not get any users /', (done) => {
//       chai.request(server)
//         .get('/api/v1/users/contacts')
//         .end((err, res)=>{
//           res.should.have.status(404);
//           res.body.should.be.an('object');
//           done();
//         });
//     });
//   });
  
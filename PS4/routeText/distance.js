const app = require("../app")
const chai = require('chai');
const mocha = require('mocha')
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('Distance API', () =>{
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/')
            .end((err,response) => {
                expect(response).to.have.status(200);
                done();
            })
    }),
    it('should return 404', function (done) {
        chai.request(app)
            .post('/')
            .end((err,response) => {
                expect(response).to.have.status(404);
                done();
            })
    })
    it('should has body', function (done) {
        chai.request(app)
            .get('/PS4')
            .end((err,response) => {
                expect(response).to.have.text(string,"<h1>PS4</h1><p>From Orange County to Suffolk County is 2991.553 miles</p>");
                done();
            })
    }).timeout(10000)
})
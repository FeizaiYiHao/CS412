const app = require("../app")
const chai = require('chai');
const mocha = require('mocha')
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('Distance API', () =>{
    it('should return 404 ', function (done) {
        chai.request(app)
            .get('/PS4/')
            .end((err,response) => {
                expect(response).to.have.status(404);
                done();
            })
    }),
    it('should return 200', function (done) {
        chai.request(app)
            .post('/PS4')
            .end((err,response,body) => {
                expect(response).to.have.status(200);
                done();
            })
    }),
    it('should has from Irvine to Boston', function (done) {
        chai.request(app)
            .post('/PS4/')
            .send({from:"Irvine"})
            .send({to:"Boston"})
            .end((err,response,body) => {
                expect(response.request._data.from).to.equal("Irvine");
                expect(response.request._data.to).to.equal("Boston");
                done();
            })
    }).timeout(20000),
//This timeout thing is just because I am in China, the connection is kinda slow.
    it('should has method post', function (done) {
        chai.request(app)
            .post('/PS4/')
            .send({from:"Irvine"})
            .send({to:"Boston"})
            .end((err,response,body) => {
                expect(response.request.method).to.equal("post");
                done();
            })
    }).timeout(20000)
})
var db = require('../../../db/db.js');
var expect = require('chai').expect;
var sinon = require("sinon");
var env = require('node-env-file');
var path = require('path');

if (process.env.NODE_ENV !== 'production') {
  env(path.resolve('.env'));
}



describe('Database', function () {

  // beforeEach(function () {
  //   sinon.spy(db.knex.client.config.connection.host, 'connect');
  //   sinon.spy(db.knex.client.config.connection.host, 'end');
  // });

  it('should be a function', function (){
    expect(db.knex).to.be.a('function');

  });

  it('should have properties of a database', function (){
    expect(db.knex.client.config.client).to.equal('postgres');
    expect(db.knex.client.config.connection.host).to.equal('localhost');
    expect(db.knex.client.config.connection.user).to.equal('');
    expect(db.knex.client.config.connection.password).to.equal('');
    expect(db.knex.client.config.connection.database).to.equal('thesis');
    expect(db.knex.client.config.connection.charset).to.equal('utf8');
  });

  it('should have a runInput function', function () {

    expect(runInput).to.be.a('function');
  });


});

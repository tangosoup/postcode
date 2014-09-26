var should = require('chai').should(),
	postcode = require('../index'),
	createFunctionString = postcode.createFunctionString;

describe('#createFunctionString', function () {

	it ('should return null when either parameter is not a string', function (){
		should.equal(createFunctionString(null,null),null);
	})

	it ('should return null when either parameter is not a string', function (){
		should.equal(createFunctionString(1,2),null);
	})

})
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should give fizz-buzz from multiples of 15', function(){
		const normalCase = [15, 30, 45, 300];
		normalCase.forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('fizz-buzz');
		});
	});

	it('should give buzz from multiples of 5', function(){
		const normalCase = [25, 50, 500];
		normalCase.forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('buzz');
		});
	});

	it('should give fizz from multiples of 3', function(){
		const normalCase = [3, 21, 33, 27];
		normalCase.forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('fizz');
		});
	});

	it('should give the inputed number if NOT multiples of 15, 5, or 3', function(){
		const normalCase = [1, 17, 29, 77];
		normalCase.forEach(function(input){
			expect(fizzBuzzer(input)).to.equal(input);
		});
	});

	it('should raise error if args is not a number', function(){
		const badInputs = ['1', false, 'a', {a: 2}];

		badInputs.forEach(function(input){
			expect(function(){
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});
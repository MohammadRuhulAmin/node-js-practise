const event = require('events');
const myEvent = new event();
myEvent.on('ruhulExam',function(){
	console.log('first Exam done!');
});
myEvent.emit('ruhulExam');

const myCalculation = (num1,num2)=>num1+num2*num1;

const ex = require('events');
const myEx = new ex();
myEx.on('cal',function(){
	var res = myCalculation(122,233);
	console.log(res);
});

myEx.emit('cal');
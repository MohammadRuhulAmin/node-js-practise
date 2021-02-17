const event = require('events');
const myEvent = new event();
myEvent.on('pohelaBoishak',function(){
	const readLine = require('readline');
	const myEventRead = readLine.createInterface(process.stdin,process.stdout);
	myEventRead.question('when is first Pohela Boishakh ?? \n',function(ans1){
		console.log(
			"first Answer  :: "+ ans1 +"\n"
			);
		myEventRead.close();
	});
});
myEvent.emit('pohelaBoishak');


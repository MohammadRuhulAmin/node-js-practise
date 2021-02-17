const fs =require('fs');
const event = require('events');
const myEvent = new event();
myEvent.on('aboutMySelf',function(err){
	if(err)console.log(err);
	else{
		fs.mkdir('MyFolder',(err)=>{
	if(err)console.log(err);
	else{
		fs.writeFile('./MyFolder/exp.txt','my text',(err)=>{
			if(err)console.log(err);
			else{
				console.log('file is created successfully!');
			}
		});
	}
});
	}
});

myEvent.emit('aboutMySelf');



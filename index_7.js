const fs = require('fs');
fs.writeFile('exp1.txt',"this is my text info",(err)=>{
	if(err)console.log(err);
	else{
		fs.readFile('exp1.txt','utf8',(err,file)=>{
			if(err)console.log(err);
			else console.log(file);
		});
	}
});

fs.rename('exp1.txt','exp2.txt',function(err){
	if(err)console.log(err);
	else console.log('renamed!of the file');
});

fs.appendFile('exp1.txt','appended ',function(err){

});
fs.unlink('exp1.txt',function(){

});
fs.mkdir('myfolder',(err)=>{});
fs.rmdir('myfolder',(err)=>{});
const summation = (num1,num2)=>num1+num2;
module.exports.sum = summation;
const multiplication = (num1,num2)=>num1*num2;
module.exports.multi = multiplication;
const division = (num1,num2)=>num1/num2;
module.exports.div = division;

const inf = require('./index_3');
console.log(inf.obj.Name);
console.log(inf.obj.myModule);
module.exports.main_info = {
	"myName":"ruhul amin",
}
 
//delete a folder with some files!


fs.unlink('./folderName/fileName',(err)=>{

});
fs.rmdir('fileName',(err)=>{

});

const createEvent = require('events');
const myEvent = new createEvent();
myEvent.on('deleteInfo',function(err){
	if(err)console.log(err);
	else {
		fs.readdir('example',(err,files)=>{
			for(let file of files ){
				fs.unlink('./example/'+file,(err)=>{
					if(err)console.log(err);
					else console.log(file + "is deleted! Successfully\n");
				})
			}
		});
	}
});

myEvent.emit('deleteInfo');
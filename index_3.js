const myObject = {
	"Name":"Ruhul Amin",
	"Email":"alfaBinomialbeta23@gmail.com",
	"myModule":()=>"this is my business",
}
module.exports.obj = myObject;

const rex  =  require('./index_1');
console.log( "the info of the object is "+rex.main_info.myName);
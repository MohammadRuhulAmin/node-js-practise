const readLine = require('readline');

console.log(readLine);
const mySystem = readLine.createInterface(process.stdin,process.stdout);
mySystem.question("what is yr name? ",function(ans){
	console.log(ans);
	mySystem.close();
});
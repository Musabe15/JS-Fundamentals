const args = process.argv.slice(2);
if(args[0] == Number){
  console.log("My number: " + Number(args[0]));
  
} else {
  console.log("Not a number")
}

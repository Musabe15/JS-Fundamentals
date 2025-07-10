const x = parseInt(process.argv[2]);

if(isNaN(x)){
  console.log("Missing size");
} else {
  for (let i = 0; i < x; i++){
    let hor ="";
    for (let j = 0; j < x; j++){
      hor += "X";
    }
    console.log(hor);
  }
}
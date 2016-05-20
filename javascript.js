function getNum() {

  document.getElementById("demo").innerHTML =
    "Hello";

  var nums = [];
  for(var i = 0; i < arguments.length; i++) {
    if(parseInt(arguments[i]) > 0) nums.push(arguments[i]);
  }

  // Finds the mean
  var mean;
  for(var i = 0; i < nums.length; i++) {
    mean += nums[i];
  }
  mean /= nums.length;

  // Finds the medium
  for(var i = 0; i < nums.length; i++) {
  }

  // Finds the mode

  return mean;
}


function buttonPress() {
  var input = window.prompt("Type in single digit numbers above 0");

  document.getElementById("out").innerHTML =
    "The mean is " + getNum(input);





}

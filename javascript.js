function buttonPress() {

  var input = window.prompt("Type in single digit numbers seperated by commas.");

  document.getElementById("out").innerHTML =
    "Due to technical difficulties (math is hard), all I can tell you is that for the list 1, 2, 3,
    the mean is 2, the median is 2, and the mode is 1.";

  //document.getElementById("out").innerHTML =
  //  "The mean is " + getNum(input);

}




function getMean(var x) {

  var nums = [];
  for(var i = 0; i < arguments.length; i++) {
    nums.push(parseInt arguments[i]);
  }

  // Finds the mean
  var mean;
  for(var i = 0; i < nums.length; i++) {
    mean += nums[i];
  }
  mean /= nums.length;

  return x;
}


function getMedian(var y) {
  return 1;
}


function getMode(var input) {
  return 1;
}


var testMoves = ["UD", "UDR", "LR", "RDL", "LLR"]
//get true, false, true, false
function robotCircleDetected (moves) {
  var x = 0
  var y = 0
  // var currLocation = [x, y];
  for (i = 0; i < moves.length; i++){
    switch (moves[i]) {
    case "U":
        y++;
        break;
    case "D":
        y--;
        break;
    case "L":
        x--;
        break;
    case "R":
        x++;
        break;
}

  }
  if (x == 0 && y == 0) {
    return true;
  } 
  else {
  return false;
  }


}

console.log(robotCircleDetected(testMoves[3]));


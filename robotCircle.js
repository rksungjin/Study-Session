

// nitially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

// ### Example

// ```
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false
// ```
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


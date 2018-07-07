function calcDroneMinEnergy(routes){
    var startAlt = routes[0][1];
    var maxPeak = 0;
      for (i = 0; i < routes.length; i++){
      if (routes[i][1] > maxPeak) {
        maxPeak = routes[i][1];
      }
    }
  if (startAlt >= maxPeak) {
    return 0;
  }
  else {
    return maxPeak - startAlt;
  }
  
  
  
  }
  
  var route = [ [0,   2, 10],
                    [3,   5,  0],
                    [9,  20,  6],
                    [10, 12, 15],
                    [10, 10,  8] ]
  
  calcDroneMinEnergy(route);       
  //should output 5
  
  
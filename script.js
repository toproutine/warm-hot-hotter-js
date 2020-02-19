// global variables
var randNo = Math.floor(Math.random()*100)+1;
var past = [];
var tries = 0;
function guess() {

  //grab value
  var ans = document.getElementById('inputField').value;

    //bingo!
  if (ans==randNo) {
    tries++;
    past.push(ans)
    document.getElementById('result').innerHTML = '&nbsp <img src=\"img/bingo.png"/>'  ;
    document.getElementById('tries').innerHTML = (tries) ;
    document.getElementById('past').innerHTML = past ;


    //hot
  } else if (ans<(randNo+10) && ans>(randNo-10)) {
    tries++;
    past.push(ans)
    document.getElementById('result').innerHTML = '&nbsp <img src=\"img/hot.png"/>'  ;
    document.getElementById('tries').innerHTML = (tries) ;
    document.getElementById('past').innerHTML = past ;

    //warmer
  } else if (ans<(randNo+20) && ans>(randNo-20)) {
    tries++;
    past.push(ans)
    document.getElementById('result').innerHTML = '&nbsp <img src=\"img/warmer.png"/>';
    document.getElementById('tries').innerHTML = (tries) ;
    document.getElementById('past').innerHTML = past ;

    //warm
  } else if (ans<(randNo+30) && ans>(randNo-30)) {
    tries++;
    past.push(ans)
    document.getElementById('result').innerHTML = '&nbsp <img src=\"img/warm.png"/>' ;
    document.getElementById('tries').innerHTML = (tries) ;
    document.getElementById('past').innerHTML = past ;

    //cold
  } else {
    tries++;
    past.push(ans)
    document.getElementById('result').innerHTML = '&nbsp <img src=\"img/cold.png"/>';
    document.getElementById('tries').innerHTML = (tries) ;
    document.getElementById('past').innerHTML = past ;

  }

}


//Function to generate random numbers for the location of the raindrops(and values?)
function randomNumber(min, max){
  return Math.floor(Math.random() *(max-min)+ min)
}

//Onclick function may need to be added into the img generation directly
//Function to generate new drop images
function raindrops(){

  // empty array to be used to store img locations so there is not repetition
  let imgLocations=[]; 
  
  // for loop to generate multiple raindrops
  for(let i=0; i<randomNumber(6,8);i++){

  //make the img
  var newDrop = document.createElement('img');
  newDrop.src = 'Assets/Raindrop.png';
  newDrop.id= 'raindrop' + i;
  newDrop.alt = 'Raindrop Number Option'

  //Onclick function here! (//Onclick> splatter, check if right/wrong, display Good job/try again,
  //clear images and rerun generate function)
  newDrop.onclick = function() {

  // Change the image source on click
  this.src = 'Assets/Splat.png';
  this.style.maxWidth = 8 + '%'
  this.pointer='pointer'

  //remove the numbers on each of the drops after a click
  var val = container.querySelectorAll('div');
  val.forEach(function(div) {
    container.removeChild(div);
  });

  //Right/wrong check

  //Progress check/update

  //Lives check/update

  // fade out all images and rerun raindrops here
  //fade out everything in "drop"
  setTimeout(function() {
    drop.classList.add('disapear');
    
    //After they are faded, delete all the items
    setTimeout(function() {
      container.innerHTML = '';

      //After all items are faded, return visabilty
      setTimeout(function() {
      container.classList.remove('disapear')
      raindrops()
      },200);
    }, 300);
  }, 500);
  };

  //initialize variables to be stored in array and checked by checkOverlap
  var left, top
  do{
    left = randomNumber(0,92)
    top = randomNumber(0,22)
  } while (checkOverlap(left, top, imgLocations));

  imgLocations.push({left:left, top:top});

  //randomize and set the location of the img
  newDrop.style.position = 'absolute';
  newDrop.style.height = 'auto';
  newDrop.style.maxWidth = 5.5 + '%'
  newDrop.style.left = left + 'vw';
  newDrop.style.top = top + 'vw';

  //put the img in the container
  let container = document.getElementById('drop');
  container.appendChild(newDrop);
  
  //make the numbers
  var dropNumber = document.createElement('div');
  dropNumber.src = 'Assets/Raindrop.png';
  dropNumber.id= 'dropValue' + i;
  dropNumber.classList.add('drop__text')
  dropNumber.alt = 'Raindrop Number Value'
  container.appendChild(dropNumber);

  //Add values to the raindrops!
  var number = randomNumber(1,100);

  dropNumber.textContent = number;

  //Position the number
  dropLeft= left + 2.6;
  dropTop = top +5;
  dropNumber.style.left = dropLeft + 'vw';
  dropNumber.style.top = dropTop + 'vw';

  //Create the equation based on the first number generated!
  /*
  function equation(number,i){
  if(i=0){
    let a = randomNumber(1,100);
    let b = randomNumber(1,100);
      if(a+b==number){
        //add a and b to text
        alert(a+b)
        else{
        
        }
      }
  }
}
*/
}
}

//this needs work! some of the raindrops overlap!
function checkOverlap(left, top, imgLocations){
  //loop through location array
  for (var i = 0; i < imgLocations.length; i++) {
    //set to current i
    var imgLocations = imgLocations[i];
    //check delta of x and y locations
    var xOverlap = left - imgLocations.left;
    var yOverlap = top - imgLocations.top;
    //distance formula > d=sqrt((x2-x1)^2 +(y2-y1)^2). Calculates distance between 2 points
    var distance = Math.sqrt(xOverlap * xOverlap + yOverlap * yOverlap);
    // Checks if overlapping position found
    if (distance < 20) { 
      return true; 
    }
}
  // return false is there is an overlap
  return false
}

//New game button



/*
Notes for Image location randomization:
https://replit.com/talk/ask/JS-place-image-on-random-coordinates/48068 */


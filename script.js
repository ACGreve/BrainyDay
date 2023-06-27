
//Function to generate random numbers for the location of the raindrops(and values?)
function randomNumber(min, max){
  return Math.floor(Math.random() *(max-min)+ min)
}

//Onclick function may need to be added into the img generation directly
//Function to generate new drop images
function raindrops(){

  // empty array to be used to store img locations so there is not repetition
  let imgLocations=[]; 
  

  //Right/wrong check
  let results = document.getElementById('results')
  let gameResults = document.getElementById('game')
  //search first available heart img
  let heartSearch = document.querySelector('img[src="Assets/Heart.png"]')
  //get count of how many heart images there are
  let allHearts = document.querySelectorAll('img[src="Assets/Heart.png"]')
  let heartCounts = allHearts.length
  //Get the background to change on win!
  let background = document.getElementById('background')
  //Access the progress bar for updates
  let progressBar=document.getElementById('progress')
  let currentProgress= 0
  //Initialize the progress count
  container = document.getElementById('drop');
  dashboard = document.getElementById('dashboard')

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

   

    if(this.id==='raindrop0'){
      //update the progress by 10%
      currentProgress += 10;
      progressBar.style.width = currentProgress + '%';
      console.log(currentProgress)
      //Progress update
      progress++ 
      console.log('current '+currentProgress)
      results.textContent='Good Job!'
      //add fade away code here!!

      if(progress===10){
        //Progress check
        gameResults.textContent='You Win!' 
        dashboard.style.opacity= 0 
        container.style.opacity= 0  
        background.setAttribute('src','Assets/SunsOut.mp4')
        console.log('Progress ' +progress)
        //add restart/new game button here

      }
    } else if(heartCounts===1){
    //Lives check
      gameResults.textContent='Game Over!'
      background.setAttribute('src','Assets/Flood.mp4')
      dashboard.style.opacity= 0 
      container.style.opacity= 0 
      //add restart/new game button here

    } else if(this.id.startsWith('raindrop')) {
    //Lives update
    results.textContent='Try Again!'
    //add fade away code here!!
    heartSearch.setAttribute('src','Assets/BrokenHeart.png')
    heartCounts = allHearts.length ;
    console.log('heart count in else' +heartCounts)
    }

    results = document.getElementById('results')
    // fade out all images and rerun raindrops here
    //fade out everything in "drop"
    setTimeout(function() {
      drop.classList.add('disapear');
      
      //After they are faded, delete all the items
      setTimeout(function() {
        container.innerHTML = '';
        //make text disappear
        results.classList.add('disapear');

        //After all items are faded, return visabilty
        setTimeout(function() {
        container.classList.remove('disapear')
        results.innerHTML = '';
        results.classList.remove('disapear')
        raindrops()
        },800);
      }, 300);
    }, 400);
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
    let firstDiv = document.getElementById('dropValue0');
    let firstNumber = firstDiv.textContent

    function abGeneration(target){
      //set the max for a 1 greater than the target
      let a = randomNumber(0, target-1);
      //b can only be as big as the target -a
      let b = target - a;
      return [a, b]
    }

    let sumArray = abGeneration(parseInt(firstNumber));

    // Add the generated numbers to the equation
    let equationContainer = document.getElementById('equation')
    equationContainer.textContent = sumArray[0] + " " + "+ " + sumArray[1] + " " + "=__";

    /* Test Code
    console.log('first number= ' + firstNumber)
    console.log('a= '+ sumArray[0])
    console.log('b= '+ sumArray[1])
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
    if (distance < 5) { 
      return true; 
    }
}
  // return false is there is an overlap
  return false
}





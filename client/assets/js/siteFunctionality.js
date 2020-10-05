$(document).ready(function() {
  console.log("ready!");
});
document.getElementById("randomkitty").addEventListener("click", randomKittyButtonClick);
//document.getElementById("createKitty").addEventListener("click", createKittyButton);


function randomKittyButtonClick() {
  document.getElementById("randomkitty").innerHTML = "Click to keep randomizing";
  console.log("randomizzzeed")
}

//this function creates the generated Kitty and stored it on the blockchain
//function createKittyButton() {
 // document.getElementById("createKitty").innerHTML = "Kitty request to blockchain send....";
 // console.log("kitty creation started")
//}

var randomKittyBtn = document.getElementById("randomkitty");
//var createKittyBtn = document.getElementById("createKitty");

// Assigning event listeners to the random kitty button
randomKittyBtn.addEventListener("click", randomHatColor);
randomKittyBtn.addEventListener("click", randomHeadColor);
randomKittyBtn.addEventListener("click", randomEyesColor);
randomKittyBtn.addEventListener("click", randomEarColor);
randomKittyBtn.addEventListener("click", randomArmsLegsColor);
randomKittyBtn.addEventListener("click", randomBellyColor);
randomKittyBtn.addEventListener("click", randomTailColor);
randomKittyBtn.addEventListener("click", randomTrunkColor);
randomKittyBtn.addEventListener("click", randomVaseColor);
randomKittyBtn.addEventListener("click", randomEyeVariation);
randomKittyBtn.addEventListener("click", randomDecorationNailVariation);
randomKittyBtn.addEventListener("click", randomDecorationWings);
randomKittyBtn.addEventListener("click", randomAnimationVariation);

// Assigning event listeners to the create Kitty Button
//createKittyBtn.addEventListener("click", getDna);
//createKittyBtn.addEventListener("click", instance);



function filterTentoHunderd() {
  let numberTenToHunderd = Math.floor(Math.random() * 90) + 10;
  return numberTenToHunderd;
}

function filterOnetoFive() {
  let numberTenToHunderd = Math.floor(Math.random() * 5) + 1;
  return numberTenToHunderd;
}

function filterOnetoSix() {
  let numberTenToHunderd = Math.floor(Math.random() * 6) + 1;
  return numberTenToHunderd;
}

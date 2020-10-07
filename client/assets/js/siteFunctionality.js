$(document).ready(function () {
  console.log("ready!");
});
document
  .getElementById("randomkitty")
  .addEventListener("click", randomKittyButtonClick);


function randomKittyButtonClick() {
  document.getElementById("randomkitty").innerHTML =
    "Click to keep randomizing";
  randomHatColor();
  randomHeadColor();
  randomEyesColor();
  randomEarColor();
  randomArmsLegsColor();
  randomBellyColor();
  randomTailColor();
  randomTrunkColor();
  randomVaseColor();
  randomVaseColor();
  randomEyeVariation();
  randomDecorationNailVariation();
  randomDecorationWings();
  randomAnimationVariation();
  console.log("randomizzzeed");
}

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

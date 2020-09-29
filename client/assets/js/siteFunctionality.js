$( document ).ready(function() {
    console.log( "ready!" );
});
document.getElementById("randomkitty").addEventListener("click", randomKittyButtonClick);

function randomKittyButtonClick() {
  document.getElementById("randomkitty").innerHTML = "Click to keep randomizing";
  console.log("randomizzzeed")
}


var btn = document.getElementById("randomkitty");

    // Assigning event listeners to the button
    btn.addEventListener("click", randomHatColor);
    btn.addEventListener("click", randomHeadColor);
    btn.addEventListener("click", randomEyesColor);
    btn.addEventListener("click", randomEarColor);
    btn.addEventListener("click", randomArmsLegsColor);
    btn.addEventListener("click", randomBellyColor);
    btn.addEventListener("click", randomTailColor);
    btn.addEventListener("click", randomTrunkColor);
    btn.addEventListener("click", randomVaseColor);
    btn.addEventListener("click", randomEyeVariation);
    btn.addEventListener("click", randomDecorationNailVariation);
    btn.addEventListener("click", randomDecorationWings);
    btn.addEventListener("click", randomAnimationVariation);





//GAAN NOG DINGEN MIS MET DE RANDOMIZER, GETALLEN GROTER DAN 100 KOMEN ERUIT + ER ZIT EEN GEKKE LOOP IN ERGENS

function filterTentoHunderd() {
    let numberTenToHunderd = Math.floor(Math.random() * 100) + 10;
    return numberTenToHunderd;
}
console.log(filterTentoHunderd())

function filterOnetoSix() {
    let numberTenToHunderd = Math.floor(Math.random() * 6) + 1;
    return numberTenToHunderd;
}


function filterOnetoFive() {
    let numberTenToHunderd = Math.floor(Math.random() * 5) + 1;
    return numberTenToHunderd;
}

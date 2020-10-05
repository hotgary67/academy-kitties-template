var web3 = new Web3(Web3.givenProvider);
var instance;
var user;
var contractAddress = "0x7d4Bb53f915Fb9CB2676091ea37c7d47c3054cfe";

$(document).ready(function () {
  window.ethereum.enable().then(function (accounts) {
    instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
    user = accounts[0];

  console.log(instance);
  })
})
function sendKittyToBlockChain() {
//  let dnaStr = getDna();
  let dnaStr = "1111";
  instance.methods.createKittyGen0(dnaStr).send({}, function (err, txHash) {
    if (err) console.log(err);

    else 
      console.log(txHash);
  
  });

}
  //methods zijn te vinden door in de console te kijken
  //send wordt gebruikt als setter functie met callbacks


/*

 let allDnaIds = document.querySelectorAll("#dnabody, #dnahat, #dnaears, #dnaarmslegs, #dnabelly, #dnatail, #dnatrunk, #dnavase, #dnaeyeshape, #dnanaildecoration, #dnawings, #dnaanimation ");
console.log(allDnaIds)

let createKittyBtn = document.getElementById("createKitty")

let dnaHead = document.getElementById("dnabody").textContent; 
let dnaHat = document.getElementById("dnahat").textContent; 
let dnaEars = document.getElementById("dnaears").innerHTML; 
let dnaArmsLegs = document.getElementById("dnaarmslegs").innerHTML; 
let dnaBelly = document.getElementById("dnabelly").innerHTML; 
let dnaTail = document.getElementById("dnatail").innerHTML; 
let dnaTrunk = document.getElementById("dnatrunk").innerHTML; 
let dnaVase = document.getElementById("dnavase").innerHTML; 
let dnaEyeShape = document.getElementById("dnaeyeshape").innerHTML; 
let dnaNailShape = document.getElementById("dnanaildecoration").innerHTML; 
let dnaWings = document.getElementById("dnawings").innerHTML; 
let dnaAnimation = document.getElementById("dnaanimation").innerHTML; 
  
  let dnaStr = dnaHead + dnaHat + dnaEars + dnaArmsLegs + dnaBelly + dnaTail + dnaTrunk + dnaVase + dnaEyeShape + dnaNailShape + dnaWings + dnaAnimation; 
  console.log(dnaStr)

//console.log(dnaStr);

document.getElementById("createKitty").addEventListener("click", createKittyButton);

function createKittyButton() {
    document.getElementById("createKitty").innerHTML = "Kitty request to blockchain send....";
    console.log(dnaStr, "kitty creation started")
  };

let dnaCatsss = getDna() 
console.log(dnaCatsss)


 createKittyBtn.addEventListener("click", console.log(getDna(dnahat)));
//createKittyBtn.addEventListener("click", getDna);console.log(getDna());
//createKittyBtn.addEventListener("click", instance);

*/

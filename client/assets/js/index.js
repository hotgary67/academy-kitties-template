var web3 = new Web3(Web3.givenProvider);
var instance;
var user;
var contractAddress = "0x6D670b16BB8641801b3830E98b11CBA29EF3d107";
var myContract =  new web3.eth.Contract(abi, contractAddress);
console.log(myContract);


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

  bornKittyPropertiesArray = []
  myContract.events.Birth ({
    // Can use from block 0 but returns all previous births
    //fromBlock: 0
   fromBlock: 'latest',
   toBlock: 'latest'
  }, function(error, result) {
    if (!error) {
      
      console.log(result, "Kitty has been born");
      console.log(
        result.returnValues.kittenId,
        result.returnValues.generation,
        result.returnValues.genes,
        result.returnValues.MumId,
        result.returnValues.dadId,
        result.returnValues.owner);

      alert('Your Kitty is born');
      bornKittyPropertiesArray.push(
        result.returnValues.kittenId,
        result.returnValues.generation,
        result.returnValues.genes,
        result.returnValues.MumId,
        result.returnValues.dadId,
        result.returnValues.owner);
        
        $("#bornCatSpecifications").append('Kitten Id:' + " " + result.returnValues.kittenId  +'<br>');
        $("#bornCatSpecifications").append('Generation:' + " " + result.returnValues.generation  +'<br>');
        $("#bornCatSpecifications").append('Genes:' + " " + result.returnValues.genes +'<br>');
        $("#bornCatSpecifications").append('Mum ID:' + " " + result.returnValues.MumId +'<br>');
        $("#bornCatSpecifications").append('Dad ID:' + " " + result.returnValues.dadId +'<br>');
        $("#bornCatSpecifications").append('Owner Address:' + " " + result.returnValues.owner);


    } else {
 
      console.log(error);
    }
  }) 
  console.log(bornKittyPropertiesArray);



bornKittyPropertiesArray.forEach((value) => {
  document.querySelector(".bornCatSpecifications").innerHTML += `<span>${value}</span>`;
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

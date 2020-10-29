
var web3 = new Web3(Web3.givenProvider);
var contractAddress = "0xa484858651Fc91C1b91737a813Ccb7FCE7296F9E";
var myContract = new web3.eth.Contract(abi, contractAddress);
console.log(myContract);
var user;
let account;
let contractAddressOfOwnerKitties;
web3.eth.getAccounts().then((metaUserAccount) => {
  contractAddressOfOwnerKitties = metaUserAccount[0];
  console.log(contractAddressOfOwnerKitties);
});

$(document).ready(function () {
  window.ethereum.enable().then(function (accounts) {
    instance = new web3.eth.Contract(abi, contractAddress, {
      from: accounts[0],
    });

    let user = contractAddressOfOwnerKitties;

    myContract.methods.getAllKittiesIOwn(user).call({}, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);

        console.log(result.length);
        $("#numberOfCatUserOwns").append(
          "Number of Cats I own:" + " " + result.length + "<br>"
        );

        allKittyIds = "3";

        myContract.methods
          //!!!!!!!!!!!!! adjust "3" with function that will dynamicly add and loop for all ids
          .getKitty(allKittyIds)
          .call({}, function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log(result.genes);

              for (let i = 0; i < result.genes.length; i++) {
                //  var dnaOfEachCat = myContract.methods.getKitty(i).call();
                var dnaOfEachCat = myContract.methods
                  .getKitty(i)
                  .call()
                  .then(function (res) {
                    var onlyDna = i + " " + res[0];
                    console.log(onlyDna);
                    // dit hieronder is even een test om alleen de vaas eruit te filteren voor iedere cat, kijken of het lukt die correct naar de html te pushen

                    let dubbelDigitGenes = onlyDna.slice(0, 18);
                    // this are the Genes codes that range from 1 to <10
                    let singleDigitGenes = onlyDna.slice(18, 23);
                    console.log(dubbelDigitGenes, singleDigitGenes);
                    // below all genes are sliced into the original values
                    let slicedDubbelDigitGenes = dubbelDigitGenes.match(
                      /.{1,2}/g
                    );
                    let slicedSingleDigitGenes = singleDigitGenes.match(
                      /.{1}/g
                    );
                    console.log(slicedDubbelDigitGenes, slicedSingleDigitGenes);

                    //asign the right gene value to body part/function
                    let headAndBodyGenes = slicedDubbelDigitGenes[0];
                    let hatGenes = slicedDubbelDigitGenes[1];
                    let eyesGenes = slicedDubbelDigitGenes[2];
                    let earGenes = slicedDubbelDigitGenes[3];
                    let armsAndLegsGenes = slicedDubbelDigitGenes[4];
                    let bellyGenes = slicedDubbelDigitGenes[5];
                    let tailGenes = slicedDubbelDigitGenes[6];
                    let trunkGenes = slicedDubbelDigitGenes[7];
                    let vaseGenes = slicedDubbelDigitGenes[8];

                    let eyeShapeGenes = slicedSingleDigitGenes[0];
                    let nailShapeGenes = slicedSingleDigitGenes[1];
                    let wingGenes = slicedSingleDigitGenes[2];
                    let AnimationGenes = slicedSingleDigitGenes[3];

                    var catColors = allColors();

                    var headAndBodyColorCode = catColors[headAndBodyGenes];
                    var hatColorCode = catColors[hatGenes];
                    var eyesColorCode = catColors[eyesGenes];
                    var earColorCode = catColors[earGenes];
                    var armsAndLegsColorCode = catColors[armsAndLegsGenes];
                    var bellyColorCode = catColors[bellyGenes];
                    var tailColorCode = catColors[tailGenes];
                    var trunkColorCode = catColors[trunkGenes];
                    var vaseColorCode = catColors[vaseGenes];

                    //     var eyeShapeCodeTest1 = function eyeShapeSelector(eyeShapeGenes, i)
                    //      function eyeShapeApplier() {
                    //   }

                  /*  function eyeShapeSelector(i, num) {
                      var num = eyeShapeGenes;
                      console.log(i, num);
                      decorationNailVariation(num);
                      $("#decorationnail").val(num);
                    }
                    eyeShapeSelector();
                    */
                  

                    //function sets the cats EyeShapeof owners cat
                    function myCatsEyeVariation(num) {
                      //  var num = filterOnetoSix(num);
                      var num = eyeShapeSelectorOption2();
                      eyeVariation(num);
                      $("#eyeshape").val(num);
                    }

                    //function to select the correct eye shape input?
                    function eyeShapeSelectorOption2() {
                      
                      if (eyeShapeGenes == "1") {
                        num = "1";
                        var Lij = myCatsEyeVariation("1");
                        // var Lij = randomEyeVariation("1");    met deze werkt het zowieso, bovenstaande is een adjusted versie
                        console.log(eyeVariation(1));
                        console.log(Lij);
                      }
                      if (eyeShapeGenes == "0") {
                        num = "2";
                        var Blij = randomEyeVariation(num);
                        console.log(Blij);
                      }
                    }

             /*       eyeShapeSelectorOption2();


                    if (eyeShapeGenes == i) {
                      num = i;
                      console.log(num);
                      var Lij = myCatsEyeVariation(i);
                      // var Lij = randomEyeVariation("1");    met deze werkt het zowieso, bovenstaande is een adjusted versie
                      console.log(eyeVariation(1));
                      console.log(Lij);
                    }
                    if (eyeShapeGenes == "0") {
                      num = "2";
                      var Blij = randomEyeVariation(num);
                      console.log(Blij);
                    }
                  }

                  eyeShapeSelectorOption2();

*/


                    //  var eyeShapeCode = catColors[eyeShapeGenes];
                    ///   var nailShapeCode = catColors[nailShapeGenes];
                    //  var wingCode = catColors[wingGenes];
                    //    var animationCode = catColors[AnimationGenes];

                    //   console.log(testVaseColorCode);

                    console.log(
                      "Dna of Vase is" +
                        " " +
                        vaseGenes +
                        " , " +
                        "color code is " +
                        vaseColorCode
                    );
                    //    function changecolor(i, color) {
                    //   $('.vasetest'+ i).css('backgroundColor', '#' + testVaseColorCode);
                    //    changecolor();f
                    // }
                    // $('.vasetest').css("color", "#" + testVaseColorCode);
                    //  $(".cat-id-01").find(".vasetest").css("color", "#" + testVaseColorCode);
                    // $("#kittyId" + i + " " + ".vasetest").css("color", "#" + testVaseColorCode);
                    //    $("#kittyId" + i + " " + ".vasetest").css("color", "#" + testVaseColorCode);

                    // !!!!!!!!!!!!!!!   $("#cat-id-01").find(".vase")
                    //!!!!!!!!!!        $("#cat-id-01 .vase")

                    //   $(".vasetest").css("color", "#" + vaseTestColor);
                    //  $(".vasetest").css("border-top-color", "#" + testVaseColorCode);

                    // VASE IS AANGEPAST NAAR VASTEST!!!  als eerste test  <div class="vase"></div> toevoegen en kijken of ik deze correct kan krijgen
                    var htmlString =
                      `<div id="kittyId` +
                      i +
                      `"><div class="container">
                    <div class="row justify-content-md-center">
                      <div class="col-sm">
                        <div class="hat">
                            <div class="hatlogo">
                              <span id="dnahat"></span>
                            </div>
                            <div class="hatinside">
                            </div>
                          </div>
                  
                          <div class="cat2">
                  
                            <div class="ears">
                  
                              <div class="ear left_ear">
                              </div>
                              <div class="ear right_ear">
                              </div>
                  
                            </div>
                  
                            <div class="head">
                  
                              <div class="eyes">
                                <div class="eye1">
                                  <div class="pupils ">
                                    <div class="pupilsinside">
                                    </div>
                                  </div>
                                </div>
                                <div class="eye2">
                                  <div class="pupils">
                                    <div class="pupilsinside">
                                    </div>
                                  </div>
                                </div>
                  
                  
                                <div class="tongue">
                                  <div class="realnose"></div>
                                  <div class="tonguecenter"></div>
                                </div>
                  
                                <div class="left-mouth"></div>
                                <div class="left-mouth2"></div>
                                <div class="left-mouth3"></div>
                                <div class="right-mouth"></div>
                                <div class="right-mouth2"></div>
                                <div class="right-mouth3"></div>
                              </div>
                  
                              <div class="body">
                                <div class="bodyinner">
                                  <div class="arms">
                                    <div class="armsleft">
                                      <div class="armsleftinside">
                  
                                      </div>
                                      <div class="armsleftinside2">
                  
                                      </div>
                                      <div class="armsleftinside3">
                  
                                      </div>
                                    </div>
                                    <div class="armsright">
                                      <div class="armsrighttinside">
                  
                                      </div>
                                      <div class="armsrightinside2">
                  
                                      </div>
                                      <div class="armsrightinside3">
                  
                                      </div>
                                    </div>
                                  </div>
                  
                                </div>
                                <div class="legs">
                                  <div class="legleft">
                                    <div class="legleftinside"> </div>
                                    <div class="legleftinside2"> </div>
                                  </div>
                  
                                  <div class="legright">
                                    <div class="legrightinside"> </div>
                                  </div>
                                </div>
                              </div>
                  
                              <div class="position" class="sunflower">
                                <div class="trunk">
                  
                                  <div class="left-branch"></div>
                                  <div class="right-branch"></div>
                                </div>
                                <div class="vase"></div>
                              </div>
                
                            </div>
                            <div class="catTail">
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                            </div>
                  
                          </div>
                  
                      </div>
                     
                      
                    </div>
                    <br><br><br><br><br><br><br><br><br><br>
                  </div></div>`;

                    //append basic design all cats owner
                    $("#allKittiesIownDivs").append(htmlString);

                    //color coding for all elements of the individual cats of owner
                    $("#kittyId" + i)
                      .find(".head, .body")
                      .css("background", "#" + headAndBodyColorCode);
                    $("#kittyId" + i)
                      .find(".hat, .hatinside")
                      .css("background", "#" + hatColorCode);
                    $("#kittyId" + i)
                      .find(".eye1, .eye2")
                      .css("background", "#" + eyesColorCode);
                    $("#kittyId" + i)
                      .find(".ear")
                      .css("background", "#" + earColorCode);
                    $("#kittyId" + i)
                      .find(".armsleft, .armsright,  .legleft, .legright")
                      .css("background", "#" + armsAndLegsColorCode);
                    $("#kittyId" + i)
                      .find(".bodyinner")
                      .css("background", "#" + bellyColorCode);
                    $("#kittyId" + i)
                      .find(".catTail span")
                      .css("background", "#" + tailColorCode);
                    $("#kittyId" + i)
                      .find(".trunk, .left-branch, .right-branch")
                      .css("background", "#" + trunkColorCode);
                    $("#kittyId" + i)
                      .find(".vase")
                      .css("color", "#" + vaseColorCode);
                    $("#kittyId" + i)
                      .find(".vase")
                      .css("border-top-color", "#" + vaseColorCode);

                    //  $('#kittyId' + i).find(".eye1, .eye2).css

                    var hahaha = eyeVariation(eyeShapeGenes);
                    console.log(hahaha);
                    // de vraag is nu hoe ik de functies aanroep hier om eyeshap enzo aan te passen
                    //  $('#kittyId' + i).find(".eyeshape").val(eyeShapeGenes);
                  })
                  .catch(function (err) {
                    console.log(err);
                  });
              }
            }
          });
      }
    });
  });
});

function sendKittyToBlockChain() {
  let dnaStr = getDna();
  console.log(dnaStr);

  instance.methods.createKittyGen0(dnaStr).send({}, function (err, txHash) {
    if (err) console.log(err);
    else console.log(txHash);
  });

  bornKittyPropertiesArray = [];
  myContract.events.Birth(
    {
      // Can use from block 0 but returns all previous births
      //fromBlock: 0
      fromBlock: "latest",
      toBlock: "latest",
    },
    function (error, result) {
      if (!error) {
        console.log(result, "Kitty has been born");
        console.log(
          result.returnValues.kittenId,
          result.returnValues.generation,
          result.returnValues.genes,
          result.returnValues.MumId,
          result.returnValues.dadId,
          result.returnValues.owner
        );

        alert("Your Kitty is born");
        bornKittyPropertiesArray.push(
          result.returnValues.kittenId,
          result.returnValues.generation,
          result.returnValues.genes,
          result.returnValues.MumId,
          result.returnValues.dadId,
          result.returnValues.owner
        );

        $("#bornCatSpecifications").append(
          "Kitten Id:" + " " + result.returnValues.kittenId + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Generation:" + " " + result.returnValues.generation + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Genes:" + " " + result.returnValues.genes + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Mum ID:" + " " + result.returnValues.MumId + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Dad ID:" + " " + result.returnValues.dadId + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Owner Address:" + " " + result.returnValues.owner
        );
      } else {
        console.log(error);
      }
    }
  );
  console.log(bornKittyPropertiesArray);

  bornKittyPropertiesArray.forEach((value) => {
    document.querySelector(
      ".bornCatSpecifications"
    ).innerHTML += `<span>${value}</span>`;
  });

  bornKittyIdAndDna = [];
  myContract.getPastEvents(
    "Birth",
    {
      fromBlock: 0,
    },

    function (error, result) {
      if (!error) {
        console.log(result, "All your cats are being retrieved");
        console.log(result.returnValues.kittenId, result.returnValues.genes);

        alert("Your Kitty is born");
        bornKittyIdAndDna.push(
          result.returnValues.kittenId,
          result.returnValues.genes
        );

        $("#bornCatSpecifications").append(
          "Kitten Id:" + " " + result.returnValues.kittenId + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Genes:" + " " + result.returnValues.genes + "<br>"
        );
      } else {
        console.log(error);
      }
    }
  );
  console.log(bornKittyIdAndDna);
}

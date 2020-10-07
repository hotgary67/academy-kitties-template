//This function code needs to modified so that it works with Your cat code.
function headColor(color, code) {
  $(".head, .body").css("background", "#" + color); //This changes the color of the cat
  $("#headcode").html("code: " + code); //This updates text of the badge next to the slider
  $("#dnabody").html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function randomHeadColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  headColor(colorcode, code);
  $("#bodycolor").val(code);
}

function hatColor(color, code) {
  $(".hat, .hatinside").css("background", "#" + color);
  $("#hatcode").html("code: " + code);
  $("#dnahat").html(code);
}

function randomHatColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  hatColor(colorcode, code);
  $("#hatcolor").val(code);
}

function eyesColor(color, code) {
  $(".eye1, .eye2").css("background", "#" + color);
  $("#eyescode").html("code: " + code);
  $("#dnaeyes").html(code);
}

function randomEyesColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  eyesColor(colorcode, code);
  $("#eyescolor").val(code);
}

function earColor(color, code) {
  $(".ear").css("background", "#" + color);
  $("#earcode").html("code: " + code);
  $("#dnaears").html(code);
}

function randomEarColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  earColor(colorcode, code);
  $("#earcolor").val(code);
}

function armsLegsColor(color, code) {
  $(".armsleft, .armsright,  .legleft, .legright").css(
    "background",
    "#" + color
  );
  $("#armslegscode").html("code: " + code);
  $("#dnaarmslegs").html(code);
}

function randomArmsLegsColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  armsLegsColor(colorcode, code);
  $("#armslegscolor").val(code);
}

function bellyColor(color, code) {
  $(".bodyinner").css("background", "#" + color);
  $("#bellycode").html("code: " + code);
  $("#dnabelly").html(code);
}

function randomBellyColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  bellyColor(colorcode, code);
  $("#bellycolor").val(code);
}

function tailColor(color, code) {
  $(".catTail span").css("background", "#" + color);
  $("#tailcode").html("code: " + code);
  $("#dnatail").html(code);
}

function randomTailColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  tailColor(colorcode, code);
  $("#tailcolor").val(code);
}

function trunkColor(color, code) {
  let colorTrunk = color;
  $(".trunk, .left-branch, .right-branch").css("background", "#" + color);
  $(".right_ear").css({
    "box-shadow": "#" + color,
  });

  $("#trunkcode").html("code: " + code);
  $("#dnatrunk").html(code);

  return colorTrunk;
}

function randomTrunkColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  trunkColor(colorcode, code);
  $("#trunkcolor").val(code);
}

function vaseColor(color, code) {
  $(".vase").css("color", "#" + color);
  $(".vase").css("border-top-color", "#" + color);
  $("#vasecode").html("code: " + code);
  $("#dnavase").html(code);
}

function randomVaseColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  vaseColor(colorcode, code);
  $("#vasecolor").val(code);
}

function eyeVariation(num) {
  $("#dnaeyeshape").html(num);

  switch (num) {
    case 1:
      $("#eyeName").html("Plain");
      normalEyes();
      break;

    case 2:
      normalEyes();
      $("#eyeName").html("Tear left");
      eyesType1();
      break;

    case 3:
      normalEyes();
      $("#eyeName").html("Tear right");
      eyesType2();
      break;

    case 4:
      normalEyes();
      $("#eyeName").html("Tears");
      eyesType3();
      break;

    case 5:
      normalEyes();
      $("#eyeName").html("Tears right");
      eyesType4();
      break;

    case 6:
      normalEyes();
      $("#eyeName").html("Freaky");
      eyesType5();
  }
}

function randomEyeVariation(num) {
  var num = filterOnetoSix(num);
  eyeVariation(num);
  $("#eyeshape").val(num);
}

function decorationNailVariation(num) {
  $("#dnanaildecoration").html(num);
  resetNails();
  switch (num) {
    case 1:
      $("#nailName").html("Miaaaauwwwww");
      resetNails();
      normalNails();
      break;

    case 2:
      $("#nailName").html("Defense");
      nails1();
      break;

    case 3:
      $("#nailName").html("Ninja Fighter Cat");
      nails2();
  }
}

function randomDecorationNailVariation(num) {
  var num = filterOnetoFive(num);
  decorationNailVariation(num);
  $("#decorationnail").val(num);
}

function decorationWings(num) {
  $("#dnawings").html(num);
  resetWings();
  switch (num) {
    case 1:
      $("#wingNames").html("No Wings");

    case 2:
      $("#wingNames").html("Failed Wings");
      wings1();
      break;

    case 3:
      $("#wingNames").html("Wingy Miaauw");
      wings2();
      break;

    case 4:
      $("#wingNames").html("Flying Cat");

      wings3();
      break;

    case 5:
      $("#wingNames").html("Dark Angel");
      wings4();
  }
}

function randomDecorationWings(num) {
  var num = filterOnetoFive(num);
  decorationWings(num);
  $("#wingshapedec").val(num);
}

function normalEyes() {
  $(".eye1, .eye2").find("div").css("border", "none");
}

function eyesType1() {
  $(".eye1").find("div").css("border-top", "10px solid");
}

function eyesType2() {
  $(".eye2").find("div").css("border-top", "10px solid");
}

function eyesType3() {
  $(".eye1,.eye2").find("div").css("border-top", "10px solid");
}

function eyesType4() {
  $(".eye1,.eye2").find("div").css("border-left", "13px solid");
}

function eyesType5() {
  $(".eye1,.eye2").find("div").css("border-top", " 36px solid");
  $(".eye1,.eye2").find("div").css("border-bottom", " 36px solid");
}

function normalNails() {


  $(".armsleftinside").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "21px",
    top: "20px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "2",
  });
  $(".armsrighttinside").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "24px",
    top: "19px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "55",
  });

  $(".armsleftinside2").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "11px",
    top: "11px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "2",
    transform: "rotate(0deg)",
  });

  $(".armsrightinside2").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "14px",
    top: "12px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "55",
    transform: "rotate(0deg)",
  });
  $(".armsleftinside3").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "1px",
    top: "-3px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "2",
  });
  $(".armsrightinside3").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "3px",
    top: "-1px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "5",
  });
}

function nails1() {

  $(".armsleftinside, .armsrighttinside").css({
    transform: "rotate( 0deg)",
    height: "0px",
    width: "0px",
    top: "25px",
    left: "12px",
  });
  $(".armsleftinside2, .armsrightinside2").css({
    transform: "rotate(90deg)",
    height: "172px",
    width: "18px",
    top: "-70px",
    left: "8px",
    "background-color": "#a45656",
    "z-index": "5",
  });
  $(".armsleftinside3, .armsrightinside3").css({
    transform: "rotate(0deg)",
    height: "0px",
    width: "0px",
    top: "-28px",
    left: "18px",
  });
}

function nails2() {

  $(".armsleftinside, .armsrighttinside").css({
    transform: "rotate( 0deg)",
    height: "10px",
    width: "0px",
    top: "-184px",
    left: "14px",
    "background-color": "black",
    "border-color": "black",
  });
  $(".armsleftinside2, .armsrightinside2").css({
    transform: "rotate(120deg)",
    height: "155px",
    width: "13px",
    top: "-64px",
    left: "10px",
    "background-color": "#a45656",
    "z-index": "125",
  });
  $(".armsleftinside3, .armsrightinside3").css({
    transform: "rotate(0deg)",
    height: "10px",
    width: "0px",
    top: "-317px",
    left: "13px",
    "background-color": "black",
    "border-color": "black",
  });
}

function normalWings() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $(".ear.left_ear").css({
    "box-shadow": "",
  });
  $("ear.right_ear").css({
    "box-shadow": "",
  });
}

function wings1() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  var code = filterTentoHunderd(code);
  var color = allColors(code);
  var colorcode = "#" + color[code];

  $(".left_ear").css({
    "box-shadow": "5px 25px 25px -9px",
    color: colorcode,
  });
  $(".right_ear").css({
    "box-shadow": "3px -25px 18px -8px",
    color: colorcode,
  });
}

function wings2() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  var code = filterTentoHunderd(code);
  var color = allColors(code);
  var colorcode = "#" + color[code];

  $(".left_ear").css({
    "box-shadow": "-75px 25px 3px 35px",
    color: colorcode,
  });
  $(".right_ear").css({
    "box-shadow": "60px -15px 3px 35px",
    color: colorcode,
  });
}

function wings3() {
  var code = filterTentoHunderd(code);
  var color = allColors(code);
  var colorcode = "#" + color[code];

  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $(".left_ear").css({
    "box-shadow": "-30px -22px 3px 35px",
    color: colorcode,
  });
  $(".right_ear").css({
    "box-shadow": "25px 25px 3px 35px",
    color: colorcode,
  });
}

function wings4() {
  var code = filterTentoHunderd(code);
  var color = allColors(code);
  var colorcode = "#" + color[code];

  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  //$('.left_ear').css({"box-shadow": "-10px -22px 3px 35px #e42e74", "transform": "rotate(30deg)" })
  $(".left_ear").css({
    "border-radius": "90% 0px% 90% 0%",
    transform: "rotate(10deg) scale(-1, 1)",
    height: "250px",
    width: "150px",
    "box-shadow": "20px -25px 18px 18px",
    left: "-70px",
    color: colorcode,
  });
  $(".right_ear").css({
    "border-radius": "90% 0p% 90% 0%",
    transform: "rotate(40deg) scaleX(-1)",
    height: "250px",
    width: "150px",
    "box-shadow": "20px -25px 18px 18px",
    left: "115px",
    color: colorcode,
  });
}

function resetWings() {
  console.log("resetting wings");

  $(".left_ear").css({
    "box-shadow": "",
  });
  $(".right_ear").css({
    "box-shadow": "",
  });
}

function animationVariation(num) {
  $("#dnaanimation").html(num);
  resetAnimation();
  switch (num) {
    case 1:
      $("#animationName").html("Lame");
      animationType1();
      break;

    case 2:
      $("#animationName").html("Cat got some moves");
      animationType2();
      break;

    case 3:
      $("#animationName").html("Hajahiiii");
      animationType3();
      break;

    case 4:
      $("#animationName").html("Master Ninja Cat");
      animationType4();
      break;

    case 5:
      $("#animationName").html("Crazy Ears");
      animationType5();
      break;

    case 6:
      $("#animationName").html("Fly Away");
      animationType6();
      break;
  }
}

function randomAnimationVariation(num) {
  var num = filterOnetoFive(num);
  $("#animation").val(num);

  $("#dnaanimation").html(num);
  resetAnimation();
  switch (num) {
    case 1:
      $("#animationName").html("Lame");
      animationType1();

      break;

    case 2:
      $("#animationName").html("Cat got some moves");
      animationType2();
      break;

    case 3:
      $("#animationName").html("Hajahiiii");
      animationType3();
      break;

    case 4:
      $("#animationName").html("Master Ninja Cat");
      animationType4();
      break;

    case 5:
      $("#animationName").html("Crazy Ears");
      animationType5();
      break;

    case 6:
      $("#animationName").html("Fly Away");
      animationType6();
  }
}

function animationType1() {
  $(".armsleft").addClass("movingHead");
}

function animationType2() {
  $(".armsleft").addClass("movingStickRight");
}

function animationType3() {
  $(".armsleft").addClass("movingStickLeft");
}

function animationType4() {
  $(".armsleft").addClass("movingStickRight");
  $(".armsright").addClass("movingStickLeft");
}

function animationType5() {
  $(".left_ear").addClass("movingWings");
  $(".right_ear").addClass("movingWings");
}

function animationType6() {
  $(".left_ear").addClass("movingWings2");
  $(".right_ear").addClass("movingWings2");
}

function resetAnimation() {
  $(".armsleft").removeClass("movingHead movingStickRight movingStickLeft");
  $(".armsright").removeClass("movingStickLeft");
  $(".left_ear").removeClass("movingWings movingWings2");
  $(".right_ear").removeClass("movingWings movingWings2");
}

function resetNails() {
  $(".armsleft").removeAttr("style");
  $(".armsright").removeAttr("style");
}

function resetWings() {
  $(".ear.left_ear").removeAttr("style");
  $(".ear.right_ear").removeAttr("style");
}

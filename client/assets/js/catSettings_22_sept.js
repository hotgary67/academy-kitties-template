
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
  //  "earsColor" : 10,
    "earColor" : 10,
    "hatColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1

    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
//  $('#dnaears').html(defaultDNA.earsColor);
  $('#dnaear').html(defaultDNA.earColor);
  $('#dnahat').html(defaultDNA.hatColor);
  $('#dnaarmslegs').html(defaultDNA.armslegsColor);
  $('#dnabelly').html(defaultDNA.armslegsColor);
  $('#dnatail').html(defaultDNA.tailColor);
  $('#dnatrunk').html(defaultDNA.trunkColor);
  $('#dnavase').html(defaultDNA.vaseColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);

 $('#dnashape').html(defaultDNA.eyesShape)
 $('#dnadecoration').html(defaultDNA.decorationPattern)
 $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
 $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
 $('#dnaanimation').html(defaultDNA.animation)
$('#dnaspecial').html(defaultDNA.lastNum)


  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnaear').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()
    dna += $('#dnahat').html()
    dna += $('#dnaarmslegs').html()
    dna += $('#dnabelly').html()
    dna += $('#dnatail').html()
    dna += $('#dnatrunk').html()
    dna += $('#dnavase').html()
    dna += $('#dnaeyes').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    $('#earcolor').val(dna.headcolor)
    $('#hatcolor').val(dna.headcolor)
    $('#armslegscolor').val(dna.headcolor)
    $('#bellycolor').val(dna.headcolor)
    $('#tailcolor').val(dna.headcolor)
    $('#trunkcolor').val(dna.headcolor)
    $('#vasecolor').val(dna.headcolor)
    $('#eyescolor').val(dna.headcolor)
    $('#eyescolor').val(dna.headcolor)
    animationVariation(dna.animation)
    $("animation").val(dna.animation)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})
$('#earcolor').change(()=>{
    var colorVal = $('#earcolor').val()
    earColor(colors[colorVal],colorVal)
})

$('#hatcolor').change(()=>{
    var colorVal = $('#hatcolor').val()
    hatColor(colors[colorVal],colorVal)
})

$('#armslegscolor').change(()=>{
    var colorVal = $('#armslegscolor').val()
    armsLegsColor(colors[colorVal],colorVal)
})

$('#bellycolor').change(()=>{
    var colorVal = $('#bellycolor').val()
    bellyColor(colors[colorVal],colorVal)
})

$('#tailcolor').change(()=>{
    var colorVal = $('#tailcolor').val()
    tailColor(colors[colorVal],colorVal)
})

$('#trunkcolor').change(()=>{
    var colorVal = $('#trunkcolor').val()
    trunkColor(colors[colorVal],colorVal)
  // manier 2..eye.....Color(colors[colorVal],colorVal)
})

$('#vasecolor').change(()=>{
    var colorVal = $('#vasecolor').val()
    vaseColor(colors[colorVal],colorVal)
})

$('#eyescolor').change(()=>{
    var colorVal = $('#eyescolor').val()
    eyesColor(colors[colorVal],colorVal)
})

$('#eyeshape').change(()=>{
    var shape = parseInt($('#eyeshape').val())
   eyeVariation(shape)
})

$('#decorationshape').change(()=>{
    var shape = parseInt($('#decorationshape').val())
   decorationVariation(shape)
})

$('#decorationmistshape').change(()=>{
    var shape = parseInt($('#decorationmistshape').val())
   decorationVariationMist(shape)
})

$('#animation').change(()=>{
    var animationVal = parseInt($('#animation').val())
  animationVariation(animationVal)
})

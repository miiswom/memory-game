// $(document).ready(function() { 
//   var cards = document.querySelectorAll(".gallerycard");
//   for(var i = 0; i < cards.length; i++){
//     var target = Math.floor(Math.random() * cards.length -1) + 1;
//     var target2 = Math.floor(Math.random() * cards.length -1) +1;
//     cards.eq(target).before(cards.eq(target2));
// }
// }); 
  


const container = document.getElementById("container")
// grab the div
const blackDiv = document.getElementById("black-div1").addEventListener("click", userClicks);
const brownDiv = document.getElementById("brown-div1").addEventListener("click", userClicks);
const fuschiaDiv = document.getElementById("fuchsia-div1").addEventListener("click", userClicks);
const lightblueDiv = document.getElementById("lightblue-div1").addEventListener("click", userClicks);
const limeDiv = document.getElementById("lime-div1").addEventListener("click", userClicks);
const orangeDiv = document.getElementById("orange-div1").addEventListener("click", userClicks);
const salmonDiv = document.getElementById("salmon-div1").addEventListener("click", userClicks);
const whiteDiv = document.getElementById("white-div1").addEventListener("click", userClicks);
const blackDivBis = document.getElementById("black-div2").addEventListener("click", userClicks);
const brownDivBis = document.getElementById("brown-div2").addEventListener("click", userClicks);
const fuschiaDivBis = document.getElementById("fuchsia-div2").addEventListener("click", userClicks);
const lightblueDivBis = document.getElementById("lightblue-div2").addEventListener("click", userClicks);
const limeDivBis = document.getElementById("lime-div2").addEventListener("click", userClicks);
const orangeDivBis = document.getElementById("orange-div2").addEventListener("click", userClicks);
const salmonDivBis = document.getElementById("salmon-div2").addEventListener("click", userClicks);
const whiteDivBis = document.getElementById("white-div2").addEventListener("click", userClicks);

// grab each image
const blackImg = document.getElementById("black-img1");
const brownImg = document.getElementById("brown-img1");
const fuschiaImg = document.getElementById("fuchsia-img1");
const lightblueImg = document.getElementById("lightblue-img1");
const limeImg = document.getElementById("lime-img1");
const orangeImg = document.getElementById("orange-img1");
const salmonImg = document.getElementById("salmon-img1");
const whiteImg = document.getElementById("white-img1");
const blackImgBis = document.getElementById("black-img2");
const brownImgBis = document.getElementById("brown-img2");
const fuschiaImgBis = document.getElementById("fuchsia-img2");
const lightblueImgBis = document.getElementById("lightblue-img2");
const limeImgBis = document.getElementById("lime-img2");
const orangeBis = document.getElementById("orange-img2");
const salmonImgBis = document.getElementById("salmon-img2");
const whiteImgBis = document.getElementById("white-img2");


const divs = [blackDiv, brownDiv, fuschiaDiv, lightblueDiv, limeDiv, orangeDiv, salmonDiv, whiteDiv,
                blackDivBis, brownDivBis, fuschiaDivBis, lightblueDivBis, limeDivBis, orangeDivBis, salmonDivBis, whiteDivBis];

// useful arrays to reuse in function:
const colorsImg = [blackImg, blackImgBis, brownImg, brownImgBis, fuschiaImg, fuschiaImgBis, lightblueImg, lightblueImgBis, limeImg, limeImgBis, orangeImg, orangeBis, salmonImg, salmonImgBis, whiteImg, whiteImgBis];
const colors = ["black", "brown", "fuchsia", "lightblue", "lime", "orange", "salmon", "white"];
// scoring
let match = 0;
let noMatch = 0;

let yesCount = 0;
let noCount = 0;
// create a function that runs when the user clicks a div
function userClicks(e, child, a, b) {
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
  if (e.target.children[0].classList.contains("found")) {
    return;
  } else {
  child = e.target.children[0];
  e.target.children[0].classList.remove("hidden");
  e.target.children[0].classList.add("showing");
  const nodeList = document.querySelectorAll('.showing'); 
// console.log(nodeList); 

// Converting using Array.prototype.slice.call 
const array1 = Array.prototype.slice.call(nodeList); 
if(array1.length >= 2) {
  a = array1[0]/*.outerHTML*/;
  b = array1[1]/*.outerHTML*/;
  for(let i=0; i < colors.length; i++) {
    if (a/*.includes*/ == colorsImg[i] || b/*.includes*/ == colorsImg[i]) {
      console.log("Match");
      match++;
    } else {
      console.log("No Match")
      noMatch++
    }
  }
if (match <= 2) {
  colors.forEach( (color) => {
    if(a.outerHTML.includes(color) && b.outerHTML.includes(color)) {
    console.log("YES");
    yesCount++;
    match = 0;
    noMatch = 0;
    return;
    } else { 
    console.log("NO");
    noCount++;
    match = 0;
    noMatch = 0;
  }} )
  // for(let i = 0; i < colors.length; i++) {
  //   if(a.outerHTML.includes(colors[i]) === true && b.outerHTML.includes(colors[i])) {
  //       a.classList.replace("showing", "found");
  //       b.classList.replace("showing", "found");
  //         match = 0;
          
  //   } else {
  //     a.classList.replace("showing", "hidden");
  //     b.classList.replace("showing", "hidden");
  //         match = 0;
  //         return;
  //   }}
  };
setTimeout ( () => {
  if (yesCount == 1) {
         a.classList.replace("showing", "found");
         b.classList.replace("showing", "found");  
         yesCount = 0;
         noCount = 0;
} else if (noCount >= 7) {
       a.classList.replace("showing", "hidden");
       b.classList.replace("showing", "hidden");
       yesCount = 0;
       noCount = 0;
} else {
  yesCount = 0;
         noCount = 0;
  return;
}}, 500)
} else {
  console.log("ERROR")
}
}}

// if the click is a first time click of two diff divs (console.log, ie. only 1 img has .showing && !.hidden), allow it
// if the click is a second time click (console.log, 2 img   has .showing && !.hidden) 
// grab the 2 images and store in an arr
// check if both images are the same: colors.forEach((color) => {if (color == colorShowing[0] && color == colorShowing[1]) {console.log("Match") } 
// else {"No Match"})} ); if images are not the same
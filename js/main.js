
  
const startButton = document.getElementById("start-button");

const container = document.getElementById("container");

const divs = ["black-div1", "brown-div1", "fuchsia-div1", "lightblue-div1", "lime-div1", "orange-div1","salmon-div1", "white-div1", 
              "black-div2", "brown-div2", "fuchsia-div2", "lightblue-div2", "lime-div2", "orange-div2","salmon-div2", "white-div2"];

const divsBis = ["black-div1", "brown-div1", "fuchsia-div1", "lightblue-div1", "lime-div1", "orange-div1","salmon-div1", "white-div1", 
              "black-div2", "brown-div2", "fuchsia-div2", "lightblue-div2", "lime-div2", "orange-div2","salmon-div2", "white-div2"];

const imgs = ["black-img1", "brown-img1", "fuchsia-img1", "lightblue-img1", "lime-img1", "orange-img1","salmon-img1", "white-img1", 
            "black-img2", "brown-img2", "fuchsia-img2", "lightblue-img2", "lime-img2", "orange-img2","salmon-img2", "white-img2"];

const imgsBis = ["black-img1", "brown-img1", "fuchsia-img1", "lightblue-img1", "lime-img1", "orange-img1","salmon-img1", "white-img1", 
                "black-img2", "brown-img2", "fuchsia-img2", "lightblue-img2", "lime-img2", "orange-img2","salmon-img2", "white-img2"];
// grab each image


startButton.addEventListener("click", () => {
  container.classList.remove("hidden");
  startButton.classList.add("hidden");
  
// Create the grid with a for loop

for(i =1; i < 17; i++) {
  let div = document.createElement('div');
  container.appendChild(div);
  div.addEventListener("click", userClicks);

  div.classList.add("gallerycard");

  let img = document.createElement('img');
  div.appendChild(img);
  img.classList.add("img", "hidden", "not-found");
  
  div.setAttribute("id", randomDivId());

  function randomDivId() {
    const nodeList = document.querySelectorAll(".gallerycard");
    const array1 = Array.prototype.slice.call(nodeList);
    let id = divs[Math.floor(Math.random() * divs.length)];
    for (let i = divs.length; i > 0; i--) {
      if(!divs.includes(id)){
        console.log("doesn't include");
      } else {
        img.setAttribute("src", `css/assets/${id}.svg`);
        let newIdArr = id.split("")
        let newIdArrSpliced = newIdArr.splice(-4, 3, 'img')
        let newIdStr = newIdArr.join("");
        colorsImg.push(`<img id="${newIdStr}" class="img" src="css/assets/${newIdStr}.svg">`);
        img.setAttribute("id", newIdStr)
        const colorsImgArr = newIdArr.push()
        divs.splice(divs.indexOf(id), 1);
        console.log("includes");
      }
  } 
    return id;
  };
}
// remove the grids with a while loop
})


// useful arrays to reuse in function:
const colorsImg = [];
const colors = ["black", "brown", "fuchsia", "lightblue", "lime", "orange", "salmon", "white"];
// scoring
let match = 0;
let noMatch = 0;

let yesCount = 0;
let noCount = 0;
// create a function that runs when the user clicks a div
function userClicks(e, a, b) {
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
  if (e.target.children[0].classList.contains("found")) {
    return;
  } else {
  // child = e.target.children[0];
  e.target.children[0].classList.remove("hidden");
  e.target.children[0].classList.add("showing");
  const nodeList = document.querySelectorAll('.showing'); 
// // console.log(nodeList); 

// // Converting using Array.prototype.slice.call 
// const array1 = Array.prototype.slice.call(nodeList); 
// console.log(array1);
// if(array1.length >= 2) {
//   a = array1[0];
//   let strA = a.parentNode.id.toString();
//   let nodeA = a.parentNode.children[0]

//   b = array1[1];
//   let strB = b.parentNode.id.toString();
//   let nodeB = b.parentNode.children[0]

//   console.log(nodeA, nodeB)

//   for(let i=0; i < divsBis.length; i++) {
//     if (strA/*.includes*/ == divsBis[i] || strB/*.includes*/ == divsBis[i]) {
//       console.log("Match");
//       match++;
//     } else {
//       console.log("No Match")
//       noMatch++
//     }
//   }
// if (match <= 2) {
//   divsBis.forEach( (div) => {
//     if(strA.includes(div) && strB.includes(div)) {
//     console.log("YES");
//     yesCount++;
//     match = 0;
//     noMatch = 0;
//     return;
//     } else { 
//     console.log("NO");
//     noCount++;
//     match = 0;
//     noMatch = 0;
//   }} )
//   for(let i = 0; i < colors.length; i++) {
//     let newArrA = strA.split("");
//     newArrA.splice(-5, 5);
//     let newStrA = newArrA.join("");

//     let newArrB = strB.split("");
//     newArrB.splice(-5, 5);
//     let newStrB = newArrB.join("");

//     console.log(newArrA, newStrB)
//     if(newStrA == colors[i] === true && newStrB == colors[i]) {
//       // nodeA.classList.remove("showing");
//       // nodeA.classList.add("hidden");
//       // nodeB.classList.remove("showing");
//       // nodeB.classList.add("hidden"); 
//       console.log(nodeA, nodeB);
//         nodeA.classList.replace("showing", "found");
//         nodeB.classList.replace("showing", "found");
//           match = 0;
          
//     } else {
//       // nodeA.classList.remove("showing");
//       // nodeA.classList.add("hidden");
//       // nodeB.classList.remove("showing");
//       // nodeB.classList.add("hidden"); 
//       console.log(nodeA, nodeB);   
//       nodeA.classList.replace("showing", "hidden");
//       nodeB.classList.replace("showing", "hidden");
//           match = 0;
//           return;
//     }}
//   };
// setTimeout ( () => {
//   if (yesCount == 1) {
//     // nodeA.classList.remove("showing");
//     // nodeA.classList.add("found");
//     // nodeB.classList.remove("showing");
//     // nodeB.classList.add("found");#
//     console.log(nodeA, nodeB)
//     nodeA.classList.replace("showing", "hidden");
//     nodeB.classList.replace("showing", "hidden");
//          yesCount = 0;
//          noCount = 0;
// } else if (noCount >= 7) {
//   console.log(nodeA, nodeB)
//   // nodeA.classList.remove("showing");
//   // nodeA.classList.add("hidden");
//   // nodeB.classList.remove("showing");
//   // nodeB.classList.add("hidden");  
//        a.classList.replace("showing", "hidden");
//        b.classList.replace("showing", "hidden");
//        yesCount = 0;
//        noCount = 0;
// } else {
//   yesCount = 0;
//          noCount = 0;
//   return;
// }}, 500)
// } else {
//   console.log("ERROR")
// }
// }
  }}

// if the click is a first time click of two diff divs (console.log, ie. only 1 img has .showing && !.hidden), allow it
// if the click is a second time click (console.log, 2 img   has .showing && !.hidden) 
// grab the 2 images and store in an arr
// check if both images are the same: colors.forEach((color) => {if (color == colorShowing[0] && color == colorShowing[1]) {console.log("Match") } 
// else {"No Match"})} ); if images are not the same

// refractor:
// create an array of colors
// before evaluating strA and strB delete the suffixes
//
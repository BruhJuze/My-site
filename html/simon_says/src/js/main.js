let box = document.getElementsByClassName("box");
let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
let points = document.getElementById("points");
let start = document.getElementById("start");

green.style.filter = "brightness(50%)";
red.style.filter = "brightness(50%)";
yellow.style.filter = "brightness(50%)";
blue.style.filter = "brightness(50%)";

const whichbox = [];
const selected = [];
let maxRound = 1;
let clickplus = 0;
let booltest = maxRound == clickplus;
let boxes = [green, red, yellow, blue];
start.addEventListener("click", () => { test(boxes); });
const wh = whichbox.toString();
const yc = selected.toString();

green.onclick = function () {
  // remove animation
  green.style.animation = "none";
  // trigger reflow
  green.offsetWidth;
  // add animation again
  green.style.animation = "bright .5s";
  selected.push(0);
  console.log("you" + selected);
  clickplus++;
  booltest = maxRound == clickplus;
  test(boxes);
}

red.onclick = function () {
  red.style.animation = "none";
  red.offsetWidth;
  red.style.animation = "bright .5s";
  selected.push(1);
  console.log("you" + selected);
  clickplus++;
  booltest = maxRound == clickplus;
  test(boxes);
}

yellow.onclick = function () {
  yellow.style.animation = "none";
  yellow.offsetWidth;
  yellow.style.animation = "bright .5s";
  selected.push(2);
  console.log("you" + selected);
  clickplus++;
  booltest = maxRound == clickplus;
  test(boxes);
}

blue.onclick = function () {
  blue.style.animation = "none";
  blue.offsetWidth;
  blue.style.animation = "bright .5s";
  selected.push(3);
  console.log("you" + selected);
  clickplus++;
  booltest = maxRound == clickplus;
  test(boxes);
}


function test(boxes) {
  for (let i = 0; i < maxRound; i++) {
    setTimeout(() => {
      boxes[i].style.animation = "bright .5s";
      points.value = i;
      booltest = maxRound == clickplus; 
      if (maxRound==1){
        whichbox.push(i);
      }

      if (whichbox[i] === selected[i] && clickplus === maxRound) {
        console.log("bruh"); 
        whichbox.push(i);
        maxRound++;
        console.log(whichbox[i]);
        booltest = maxRound == clickplus;
        clickplus = 0;
        if (maxRound==2){
            whichbox.pop();
            whichbox.pop();
            selected.pop();
          };
      } else if (whichbox[i] !== selected[i] && clickplus === maxRound) {
        alert("you are dead", i + 1);
      }
    }, 1000 * i);
  }
}


function clickresult() {
  console.log(maxRound);
  console.log(clickplus);
  console.log(booltest);
  console.log("whichbox" + whichbox);
  console.log("selected" + selected);
}

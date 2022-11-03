let box = document.getElementsByClassName("box");
let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
let points = document.getElementById("points");

green.style.filter = "brightness(50%)"
red.style.filter = "brightness(50%)";
yellow.style.filter = "brightness(50%)";
blue.style.filter = "brightness(50%)";


const whichbox = [1];
const selected = [];
let clickplus = 0;
const wh = whichbox.toString(); 
const yc = selected.toString(); 


green.onclick = function(){  
  
// remove animation 
green.style.animation = 'none';
// trigger reflow
green.offsetWidth;
// add animation again
green.style.animation = "bright .5s";
selected.push(0); console.log("you" + selected);
clickplus++;
}

red.onclick = function(){  
  
red.style.animation = 'none';
red.offsetWidth;
red.style.animation = "bright .5s";
selected.push(1); console.log("you" + selected);
clickplus++;
}

yellow.onclick = function(){  
  
    yellow.style.animation = 'none';
    yellow.offsetWidth;
    yellow.style.animation = "bright .5s";
    selected.push(2); console.log("you" + selected);
    clickplus++;
    }

blue.onclick = function(){  
  
blue.style.animation = 'none';
blue.offsetWidth;
blue.style.animation = "bright .5s";
selected.push(3); console.log("you" + selected);
clickplus++;

}    


let boxes = [green, red, yellow, blue];
let mr = 1;
  



function test(boxes) {
   


    for(let i=0; i<whichbox; i++){
    
        (function (i) {
        setTimeout(function () {
       
        boxes[i].style.animation = "bright .5s";
         points.value = i;
        if(whichbox[i]===selected[i]){
    console.log("bruh");
           
        }
        else{
            console.log("you are dead", i+1);
        }
        }, 1000 * i);
    
    })(i);
    }
    
    
    
    
        
    
    };
    
    
    test(boxes);









let myname = "Mikail";
let nl = myname.length;
console.log("test");
let replacename = document.getElementById("thename");

replacename.innerHTML = "<li class='aname'> HELLOO!!!! My name is " + myname + " and my name has " + nl + " letters. </li> </br>";

for (let i=0; i < nl; i++){
    replacename.innerHTML += "<li>" +  myname[i] +  "</li>";
}

replacename.innerHTML += "</br>";


let nlmax = nl-1;
for (let i=0;  i < nl; i++){
    if(i<nlmax){
    replacename.innerHTML += myname[i] + ' ';
    }
    else{
        replacename.innerHTML += myname[i] + "<br/> <br/>";
    }
}


let newArray = [];
let sum = 0;
for (let i=0; i<10; i++){
        newArray.push(i);
        replacename.innerHTML += newArray[i];
        sum += newArray[i];
    }

    replacename.innerHTML += "</br> Summan av talen är " + sum;

    let animal = ["dog", "cat", "fish", "zebra"];
    let al = animal.length;
    let test = '</br> </br> <ul>';
    for(let i=0; i<al; i++){
         test += '<li>'+animal[i]+'</li>';
    }
    
    
    replacename.innerHTML += test += '<ul>';


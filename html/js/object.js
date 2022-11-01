window.onload = function(){
    
    let me = {
        firstname: "Mikail",
        age: 19,
        isAlive: true 
    };
    
    let randomguy = {
        firstname: "Harambe",
        age: 2016,
        isAlive: false
    };

    let god = {
        firstname: "Michael Jordan",
        age: 2016,
        isAlive: false
    }




let group = [me, randomguy, god];
let gl = group.length;
console.log(me.firstname, randomguy.firstname);

let myDiv = document.getElementById('bruh');
myDiv.innerHTML = "";
console.log("test")




for (let i = 0; i < gl; i++) {
    myDiv.innerHTML += "<li>" + group[i].firstname + "</li>";
  }

}

class Person {
    constructor(firstname, age, isAlive){
        this.firstname = firstname;
        this.age = age;
        this.isAlive = isAlive;
    }
}

let someperson = new Person("Mikail", 19, true);
let someperson2 = new Person("Harambe", 2016, false);
let someperson3 = new Person("Michael Jordan", 59, true);

let newgroup = [someperson, someperson2, someperson3];
let ngl = newgroup.length;





for(let i=0; i<ngl; i++){

let container = document.createElement("div");
let heading = document.createElement("h3");
let pTag = document.createElement("p");
let span = document.createElement("span");

container.className = "person";

heading.className = "person_age";
heading.innerHTML = "Firstname: " + newgroup[i].firstname;

pTag.className = "person_age";
pTag.innerHTML = "Age: " + newgroup[i].age;

span.className = "person_isalive";
span.innerHTML = "Status: " + newgroup[i].isAlive;

container.appendChild(heading);
container.appendChild(pTag);
container.appendChild(span);

myDiv.appendChild(container);






   
}



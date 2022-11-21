function test() {
    localStorage.setItem("name", "inteMikail");
    localStorage.setItem("name2", "din j\xe4vel");
}
let valueFromLs = localStorage.getItem("name") || "";
let valueFromLs2 = localStorage.getItem("name2");
let myDiv = document.getElementById("yes");
class Person {
    constructor(firstname, age, isAlive){
        this.firstname = firstname;
        this.age = age;
        this.isAlive = isAlive;
    }
}
let guys = [
    new Person("Mikail", 19, true),
    new Person("Harambe", 2016, false),
    new Person("Michael Jordan", 59, true)
];
localStorage.setItem("guys", JSON.stringify(guys));
let guysFromls = localStorage.getItem("guys") || "[]";
console.log("guys", guysFromls);
let objGuys = JSON.parse(guysFromls);
console.log(objGuys);
//im too lazy so [{"firstname":"Mikail","age":19,"isAlive":true},{"firstname":"Harambe","age":2016,"isAlive":false},{"firstname":"Michael Jordan","age":59,"isAlive":true}] 
myDiv.innerHTML = "</br> </br>" + valueFromLs + " " + valueFromLs2;
myDiv.innerHTML += "</br> </br>";
for(let i = 0; i < guys.length; i++){
    let container = document.createElement("div");
    let heading = document.createElement("h3");
    let pTag = document.createElement("p");
    let span = document.createElement("span");
    container.className = "person";
    heading.className = "person_age";
    heading.innerHTML = "Firstname: " + objGuys[i].firstname;
    pTag.className = "person_age";
    pTag.innerHTML = "Age: " + objGuys[i].age;
    span.className = "person_isalive";
    span.innerHTML = "Status: " + objGuys[i].isAlive;
    container.appendChild(heading);
    container.appendChild(pTag);
    container.appendChild(span);
    myDiv.appendChild(container);
}

//# sourceMappingURL=index.cd6d870a.js.map

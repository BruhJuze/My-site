function test(){
    localStorage.setItem("name","inteMikail");
    localStorage.setItem("name2","din jävel");
}

let valueFromLs: string = localStorage.getItem("name") || "";
let valueFromLs2 = localStorage.getItem("name2");


let myDiv: HTMLDivElement = document.getElementById("yes") as HTMLDivElement;

class Person {
public firstname: string;
public age: number;
public isAlive: boolean;
    constructor(firstname: string, age: number, isAlive: boolean){
        this.firstname = firstname;
        this.age = age;
        this.isAlive = isAlive;
    }
}

let guys: Person[] = [new Person("Mikail", 19, true), new Person("Harambe", 2016, false), new Person("Michael Jordan", 59, true)];

localStorage.setItem("guys", JSON.stringify(guys));

let guysFromls: string = localStorage.getItem("guys") || "[]" ;
console.log("guys", guysFromls);


let objGuys: Person[] = JSON.parse(guysFromls);

console.log(objGuys);

//im too lazy so [{"firstname":"Mikail","age":19,"isAlive":true},{"firstname":"Harambe","age":2016,"isAlive":false},{"firstname":"Michael Jordan","age":59,"isAlive":true}] 

myDiv.innerHTML = "</br> </br>" + valueFromLs + " " + valueFromLs2;
myDiv.innerHTML += "</br> </br>" ;

for(let i:number=0; i<guys.length; i++){

    let container: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let heading: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
    let pTag: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
    let span: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
    
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
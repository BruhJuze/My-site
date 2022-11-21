let x: number = 21;
console.log(x);
let myDiv: HTMLDivElement = document.createElement("div") as HTMLDivElement;
myDiv.innerHTML = "9 + 10 = " + x;
document.body.appendChild(myDiv);
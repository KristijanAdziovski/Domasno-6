let input=+prompt("Please input the weight in kilograms");
function chicken(sum){
    let suma = sum/2;
    return suma;
}
let chickenSum=chicken(input);
let paragraph = document.getElementById("first");
let newParagraph = document.createElement("div");
newParagraph.setAttribute("class","myDiv");
paragraph.appendChild(newParagraph);
paragraph.innerHTML=`You have ${chickenSum} chicken`;
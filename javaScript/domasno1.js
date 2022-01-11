let newParagraph=document.getElementById("first");
let divParagraph=document.createElement("div");
divParagraph.setAttribute("class","myDiv");
newParagraph.appendChild(divParagraph);
let array = [2,4,5,9,6];
function sumArray(suma){
    let sum=0;
    divParagraph.innerHTML+=`The number's in array is :<ul>`;
    for(let i=0;i<suma.length;i++){
        divParagraph.innerHTML+=`<li>${suma[i]}</li></ul>`;
        sum=sum+suma[i];
    }
    return sum;
}
function list(counter){
    let newArray=[];
    for(let i=0;i<counter.length;i++){
        newArray=counter[i]; 
    }
}
function equasion(mathematic){
    let secArray=[];
    let ednakvo=["="];
    let full="";
    for(let i=0;i<mathematic.length-1;i++){
        ednakvo.unshift("+")[i];
    }
    for(let i=0;i<mathematic.length;i++){
        secArray[i]=`${mathematic[i]}${ednakvo[i]}`;
       full=full+secArray[i];
    }
    return full;
}
let sumNumber = sumArray(array);
divParagraph.innerHTML+=`Sum is ${sumNumber}</br>`;
let secondFunction = equasion(array);
divParagraph.innerHTML+=`Equation is : ${secondFunction}${sumNumber}`;


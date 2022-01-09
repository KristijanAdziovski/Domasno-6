let kg = +prompt("Vnesete gi kilogramite za da presmetate kolku kokoski imate:");
let kokoski;
 function weightInChickens(){

     kokoski=kg/2;
     console.log(`Vie cuvate : ${kokoski} kokoski.`);
 }
 weightInChickens()
 document.getElementById("resenie").innerText= (`Vie cuvate : ${kokoski} kokoski.`);
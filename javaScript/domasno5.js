let row = +prompt("Input how much rows to have ");
let col = +prompt("Input how much colums to have");
function table(rows,colums){
    let tabela = document.createElement("table");
    newTab.appendChild(tabela);
    let tr=[];
    let td=[];
    for(let i=0;i<=rows;i++){
        tr[i]=document.createElement("tr");
        newTab.appendChild(tr[i]);
        for(let j=0;j<=colums;j++){
            td[j]=document.createElement("td");
            td[j].setAttribute("style", "border:1px solid red; ");
            tr[i].appendChild(td[j]);
            td[i,j].innerHTML=`Row${i},Colums${j}`;
        }
    }
}
let tab=document.getElementById("table");
let newTab=document.createElement("div");
newTab.setAttribute("class","myDiv");
tab.appendChild(newTab);
table(row,col);
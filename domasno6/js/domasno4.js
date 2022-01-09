function createTable()
{
rn = +prompt("Vnesete kolku reda da ima");
cn = +prompt("Vnesete kolku koloni da ima");
  
 for(let i=0;i<parseInt(rn);i++)
  {
   let x=document.getElementById('myTable').insertRow(i);
   for(let j=0;j<parseInt(cn);j++)  
    {
     let y=  x.insertCell(j);
     y.innerHTML="Red-"+i+" Kolona-"+j; 
    }
   }
}
createTable()
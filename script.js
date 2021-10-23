function DisplayFrom1to10()
{
for(var i = 1;i<=10;i++)
console.log(i);
}

function CheckForEvenOrOdd()
{
var no = parseInt(document.getElementById("txtNo").value);
if(no%2==0)
console.log("Its even");
else 
console.log("Its odd");
}

function DisplayTable()
{
  var no = parseInt(document.getElementById("txtNo").value);
  for(var i=1;i<=10;i++)
  console.log(no + " * " + i +  " = " + no*i);
}

function CheckLength()
{
 console.log(document.getElementById("txtSentence").value.length);
}

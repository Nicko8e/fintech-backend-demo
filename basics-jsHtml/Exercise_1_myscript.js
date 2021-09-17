//alert ('hello world'); 
             
function myFunction() {
    document.getElementById("h1ref").style.backgroundColor = "green";

    
}

function myFunction2(){
    var node = document.createElement("li");
    var textnode = document.createTextNode("MYDigi");
    node.appendChild(textnode); 
    document.getElementById("list").appendChild(node);
    document.getElementById("addbtn").disabled= true;
}
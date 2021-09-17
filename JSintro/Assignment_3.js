const { ENGINE_METHOD_DIGESTS } = require("constants");

/* A short demo for arrays */
var myArray = ["ABS Bank", 7000.00, true, 'Savings Account']; 

myArray.forEach(myfunction(){
    var tag = document.createElement("p");
    var text = document.createTextNode(myArray.length);
    tag.appendChild(text);

)
//Arrays can contain arrays as members. (2D arrays - Table)

var grocery_list = [[5,'egg'],[10,'bread'],[12,'milk']];
console.log(grocery_list[2][1]); // returns 'milk', 2nd item of 3rd array 




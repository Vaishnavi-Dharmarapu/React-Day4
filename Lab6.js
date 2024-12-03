const myMarks = [60,80,90,34,56,90,2]
let updatedMarks = myMarks.map((mark)=>mark+2)
console.log("-----------------");
console.log(updatedMarks);
console.log("-------------------");
let myNum =[1,2,3,4]
const myTotal = myNum.reduce(function(accurvalue){
    console.log("accumulator value","current value");
    return accurvalue
    
},0)
console.log(myTotal);
const shoppingCart =[{
    itemName: "JS course",
    price: 3000
},
{
    itemName: "Java course",
    price: 6000   
},
{
    itemName: "Python course",
    price: 2000
},
{
    itemName: " react JS couse",
    price: 1000
}
] 
var result = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(result);
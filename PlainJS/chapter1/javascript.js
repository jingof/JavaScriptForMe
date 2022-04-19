

let age = 20;
console.log("Age is ",age);
if(true)
{
    let age = 30;
    console.log("Age is ",age);
}
console.log("Age is ",age);

const greet = function(name = 'Francis', time = 'Morning'){
    console.log(`Good ${time}, ${name}.`);
}

greet('Tiano', "Afternoon");
greet();

// let calcArea = function(length = 0, width = 0)
// {
//     return length * width;
// }
let calcArea = (length, width) => {return length * width};
console.log(calcArea(12,3));

let calcCircleArea = function(radius = 0)
{
    let area = 3.14 * radius *radius;
    return area;
}
console.log("Area is ", calcCircleArea(5));

let calcVolume = function(length = 0, width = 0, height = 0)
{
    let area = calcArea(length,width);
    return area * height;
}
console.log(`Volume is ${calcVolume(1,3,5)}`);

const computeBill = function(products, tax)
{
    let total = 0;
    for(let i = 0; i < products.length; i++)
        total += products[i] + (products[i] * tax);
    return total;
}
// const computeBill = (products, tax) => 
// {   
//     let total = 0;
//     for(let i = 0; i < products.length; i++)
//         total += products[i] + (products[i] * tax);
//     return total;
// };
products = [12,2,6,33,78,2];
console.log(computeBill(products, 0.01));



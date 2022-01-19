//Very Easy 
function min1(x,y){
    return Math.min(x,y);
}
var mini= min1(5,8);
console.log(mini);

//Easy 
var Students=[{
    firtName: "Giselle", 
    lastName: "Guevara",
    age: 30,
},{
    firtName: "Alec",
    lastName: "Franco",
    age: 1,
},{
    firtName: "Maria",
    lastName: "Zarate",
    age: 23,
}]
console.log(" Hello, my name is " + Students[1].firtName + " " +Students[1].lastName + " and i'm " + Students[1].age + " years old.");


//medium 
var input= Number(prompt("number"))

if (input == 1){
    console.log("January")
} else if (input == 2){
    console.log("February")
}else if (input == 3){
    console.log("March")
}else if (input == 4){
    console.log("April")
}else if (input == 5){
    console.log("May")
}else if (input == 6){
    console.log("June")
}else if (input == 7){
    console.log("July")
}else if (input == 8){
    console.log("August")
}else if (input == 9){
    console.log("September")
}else if (input == 10){
    console.log("October")
}else if (input == 11){
    console.log("November")
}else if (input == 12){
    console.log("December")
}
else{
    console.log("Please enter valid number.")
    alert ('Please enter valid number.');
};
   


//Hard 
function bmiCal(height, mass){
    return (mass / (height * height))
}
var bmi=[{
    name: "Tom",
    mass: 8,
    height: 9,

},{
    name: "Jerry",
    mass: 45,
    height:10,

}]
var tomBmi= bmiCal(bmi[0].height, bmi[0].mass);
var jerryBmi= bmiCal(bmi[1].height, bmi[1].mass);
var outcome= tomBmi > jerryBmi;

console.log("Is Tom's BMI higher than Jerry's?" + outcome);

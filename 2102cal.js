(function(){
var num1=prompt("Enter the number","<num1>");
console.log(num1);

var num2=prompt("Enter the number","<num2>");
console.log(num2);
 
var or=prompt("Enter the operator(+,-,*,/)","<operator>");
console.log(or);

switch(or)
{
case '+' :console.log(num1+num2);
break;
case '-' : console.log(num1-num2);
break;
case '*' : console.log(num1*num2);
break;
case '/' : console.log(num1/num2);
break;
default: console.log("INVALID")
}
})();
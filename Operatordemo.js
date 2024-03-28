console.log(10/2);
console.log(10+2);
console.log(10-2);
console.log(10*2);
console.log(10%2);
console.log(10/0);
console.log(10/0.0);
console.log(0/0);
console.log("Mukesh"/0);
console.log(10/null);
console.log(10/undefined);

console.log(10+10);
console.log(10+10+"Ani");
console.log("Ani"+10+10);

console.log("5"+5)
console.log("5"-5);

console.log(10+true);
console.log(10-true);

console.log(10/true);
console.log(10/false);

console.log(10*false);

let num1=50;
let num2="50";

if(num1==num2)
{
    console.log("Matched");
}
else{
    console.log("Not Matched");
}

if(num1===num2)
{
    console.log("Matched");
}
else{
    console.log("Not Matched");
}

console.log(16>10);
console.log(16<10);
console.log(16>=16);
console.log(16<=16);
console.log(16>=10);
console.log(16<=10);
console.log(16>=10 && 1<2);
console.log(16>=10 && 1>2);
console.log(16<=10 || 1<2);
console.log(16<=10 || 1>2);

let str1 = "This is JS";
let str2 = "JS";
let str3 = "This is js";

if(str1.includes(str2))
{
    console.log("Pass")
}
else{
    console.log("fail")
}

if(str1==str3)
{
    console.log("Pass")
}
else{
    console.log("fail")
}

if(str1.toLowerCase()==str3.toLowerCase())
{
    console.log("Pass")
}
else{
    console.log("fail")
}

let num3 = 5
num3 = num3+5
console.log(num3);
num3+=5
console.log(num3);
num3*=5
console.log(num3);
num3/=5
console.log(num3);

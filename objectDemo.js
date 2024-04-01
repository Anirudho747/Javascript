let obj1={}
console.log(typeof obj1);

let obj2={
    "Name": "Ani",
    "City": "Chennai",
    Age: 35,
    Status: true,
    Iq:null
}

console.log(typeof obj2);
console.log(obj2);

console.log(obj2.Name);

console.log(obj2["City"]);

console.log(obj2["Salary"]);

obj2.Salary=10000

console.log(obj2)

delete obj2.Age

console.log(obj2);

let obj3=
{
    "Name": "Dhananjay",
    "City": "Lucknow",
    Age: 35,
}

obj2.fullAddress=obj3;

console.log(obj2);

obj2.myFamily=["M1","M2","M3","M4","M5","M6"];

console.log(obj2);

console.log(obj2.fullAddress.Name);

console.log(obj2.myFamily[1]);

obj2.myfunction=function()
{
    console.log("Hwllo from function");
}

console.log(obj2);

let nyfunc = function()
{
    console.log("Hello from my func");
}

console.log(obj2.myfunction);

obj2.myfunction();

let Anirudh=obj2;
console.log(Anirudh);

delete Anirudh.fullAddress

console.log(Anirudh);

console.log(obj2);

obj2.someRandomValue="Random";

console.log(Anirudh);
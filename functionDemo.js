function sayHello()
{
    console.log("Hello JS");
}

console.log(sayHello());

function showName(fname,lname)
{
        return fname+lname;
}

console.log(showName("Anirudho ","Sengupta"))
console.log(typeof showName);

let myfunc = function f1()
{
    console.log("I am in f1");
    return 30;
}

console.log(myfunc());

let myfuncNew = function(n1,n2,n3)
{
    console.log("I am in f2");
    return n1+n2+n3;
}

console.log(myfuncNew(12,24,36));

let myObj={
    "Name": "Ani",
    f3:function()
    {
        console.log("m inside object")
    }
}

myObj.f3();

let arr=[
    12,"Ani",
    f1=function()
    {
        console.log("I am inside array");
    }
]

arr[2]();

let y=arr[2];

y();

let z=(x1,x2) =>
{
        console.log("Hello JS again");
        console.log(x1+x2);
}
z(12,45);

let myaddress=()=>  console.log("Kolkata")


myaddress();

let myaddressNew=(houseNumber,streetNumber)=>  console.log(`${houseNumber} ${streetNumber} Kolkata`)

myaddressNew("501","Barasat")

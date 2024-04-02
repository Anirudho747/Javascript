for (let x=0;x<10;x++)
{
    console.log("Value is ",x);
}

//console.log("Value is ",x);

for (let x=10;x>0;x--)
{
    console.log("Value is ",x);
}

let y=0;
for (;y<5;y++)
{
    console.log("Value is ",y);
}

let z=5;
for (;z>0;)
{
    console.log("Using for ",z);
    z--;
}

let arr=[12,"Ani",true,null];

for(let x=0;x<arr.length;x++)
{
    console.log(arr[x]);
}

arr.forEach(element =>{
    console.log("Using for each ",element);
})

for(let element of arr)
{
    console.log("Using for of",element);
}

for(let element in arr)
{
    console.log("Using for in",element);
    console.log("Using for in",arr[element]);
}

let tname="WebdriverIO";

for(x of tname)
{
    console.log(x);
}

let myObj={
 "Name":"Ani",
 Marks:10,
 status:false
}

console.log(myObj);

for(let x in myObj)
{
    console.log(x);
}

let sum=5;
while(sum<=15)
{
    console.log(sum);
    sum+=5;
}
let fname = "Ani is my name "
console.log(typeof fname);

console.log(fname.length);
console.log(fname[1]);
console.log(fname.includes("A"));
console.log(fname.includes("o"));
console.log(fname.startsWith("A"));
console.log(fname.endsWith("A"));
console.log(fname.endsWith("A"));
console.log(fname.split(" "));

let arr = fname.split(" ");
console.log(arr[3]);
console.log(arr[4]);

console.log(fname.toLowerCase());
console.log(fname.toUpperCase());
console.log(fname.trim());

console.log(fname.replace("name","first name"));

console.log(fname.toLowerCase());

let finalmsg = "Total price is 200 USD"
let value = finalmsg.split(" ")[3];
console.log(value);
console.log(typeof value);

let price = parseInt(value);
console.log(price);
console.log(typeof price);

if(price==200){
    console.log("Pass")
}
else{
    console.log("Fail")
}

let x=90;

let msg = "Final \tamount is \"300\" \nUSD";
console.log(msg);

let msg2 = "Final amount is ${x} USD";
console.log(msg2);
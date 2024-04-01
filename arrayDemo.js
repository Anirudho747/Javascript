let arr=[10,20,30,"Ani",true]

console.log(arr);
console.log(typeof arr);
console.log(arr[1]);
console.log(arr[10]);
console.log(arr[4]);
console.log(typeof arr[4]);
console.log(arr.length);
console.log(arr[arr.length-2]);

console.log(arr.push(100));                      //Adds element at end of array and returns length
console.log(arr);

console.log(arr.unshift("Sengupta"));           //Adds element at beginning of array and returns length
console.log(arr);

console.log(arr.pop());                           //Removes last element and returns the element
console.log(arr);

console.log(arr.shift());                         //Removes first element and returns the element
console.log(arr);

console.log(arr.splice(0,3))                     //Must specify the strting point for deletion and # of elements deleted.Returns deleted items
console.log(arr);

let arr1=[10,20,30,"Ani",true]
let arr2=["Java","JS","C#"]

arr1.push(arr2);                                //Adds an array to another array 
console.log(arr1);

console.log(arr1[5]);

console.log(arr1[5][0]);

let obj1={
    "Name":"Mukesh Otwani",
    "Lang":"JavaScript"
}

console.log(arr1.unshift(obj1));                //Adds an object to an array
console.log(arr1);

console.log(arr1[0].Lang)                       //Access specific property in objrct in array

for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}
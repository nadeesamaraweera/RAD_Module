let ar1 = [1,2,3];
let ar2 =['1','2','3','4'];
let ar3 =[1,'2',true];

let ar4 =[]; //compile error
let ar5 :any[]=[]; //compile ok

let ar6 : Array<String>
ar6 =['1','2'];

function printArray(ar : number[]){
    ar.forEach(element =>{
       console.log(element);
    })
}

// printArray(ar2)//string [] not support
printArray(ar1)



//-----------------------
let ar7=['a','b'];
let ar8=['c', 'd', 'e'];

ar7.push(...ar8);
console.log(ar7);

let ar9=['a','b'];
let ar10=['c', 'd', 'e'];
let ar11=[...ar9, ...ar10]

console.log(ar11);

//------------------------

let t1: [number, number, number]=[1,2,3];

// let t2: [number, string]=[1.09,2.89];
let [x,y]=t1; 

console.log(x,'-',y);




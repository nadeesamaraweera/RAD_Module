// ----------function params passing and type secuaring --------------------------------- //
function add(x : number,y :number) :number{
    if(x > 10){
    return x + y;
    }else{
        return x;
    }
}
console.log(add(10,20));

// -------------addition function----------------------------------------------------- //
type addFn =(x:number , y:number) => number;

function added(x:number ,y :number){
    return x + y
}

function calculate (n1:number,n2:number,calcFn:addFn) : number{
    const result =calcFn(n1,n2)
    return result;
}
console.log(calculate(10,20,added));

// -------------subs function------------------------------------------------------ //
type subFn =(x:number , y:number) => number;

function substraction(x:number ,y :number){
    return x - y
}

function subsction (n1:number,n2:number,calcFn:subFn) : number{
    const result =calcFn(n1,n2)
    return result;
}
console.log(subsction(20,10,substraction));

// -------------Multilication function--------------------------------------------- //

type multiFn =(x:number , y:number) => number;

function Multilication(x:number ,y :number){
    return x * y
}

function Multi (n1:number,n2:number,calcFn:multiFn) : number{
    const result =calcFn(n1,n2)
    return result;
}
console.log(Multi(20,10,Multilication));


// -------------Divide function----------------------------------------------------- //

type divFn =(x:number , y:number) => number;

function divide(x:number ,y :number){
    return x / y
}

function divided (n1:number,n2:number,calcFn:divFn) : number{
    const result =calcFn(n1,n2)
    return result;
}
console.log(divided(20,10,divide));



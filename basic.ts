
let names:string;

names = 'Dzaka Eryan' ;
console.log(names)

function arrayMutate(params:number[], mutate:(v: number) => number) :number[] {
    return params.map(mutate);
}

console.log(arrayMutate([1,2,3,4], (v)=> v * 10))
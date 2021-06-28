"use strict";
var names;
names = 'Dzaka Eryan';
console.log(names);
function arrayMutate(params, mutate) {
    return params.map(mutate);
}
console.log(arrayMutate([1, 2, 3, 4], function (v) { return v * 10; }));

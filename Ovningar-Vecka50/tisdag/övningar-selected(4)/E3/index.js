
const foo = x => x.push(42);

const a = [];
const b = a;
foo(a);
foo(b);

console.log(a.length);
//2
console.log(b.length);
//2
console.log(a[1]);
//42
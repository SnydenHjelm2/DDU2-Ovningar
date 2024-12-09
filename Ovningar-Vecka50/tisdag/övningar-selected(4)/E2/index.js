

const foo = (x = 42) => x[1] == "W" ? 1 : 0;

let a = foo();
let b = foo(a);
let c = foo("WDU") ? "jimi" : "janis";
let d = foo("WWW") ? "nina": "peter";

// Vad kommer att loggas på konsolen?
console.log(a);
//0
console.log(b);
//0
console.log(c);
//janis
console.log(d);
//nina

console.log(foo(foo("WWW")));
//0
console.log(a && b);
//0
console.log(c || d ? "joni" : "carole");
//joni
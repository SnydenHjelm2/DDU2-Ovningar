

const foo2 = (x) => x[1] == "W" ? 1 : 0;

let a = 42;
let b = foo2(a);
let c = foo2("WDU");
let d = foo2("WWW");

// Vad kommer att loggas på konsolen?
console.log(a);
//42
console.log(b);
//0
console.log(c);
//0
console.log(d);
//1
console.log(foo2(foo2("WWW")));
//0

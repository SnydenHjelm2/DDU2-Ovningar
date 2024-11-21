// Det är viktigt att du lär dig läsa kod.
// För att inte göra koden för komplicerat har vi skapa några enkla
// men tyvärr ganska meningslösa metoder.

// Vad kommer att loggas på konsolen?

const o1 = {
  f1: function (n1, n2) {
    return n1 > n2;
  },
  f2: function (n1, n2) {
    return n1 + n2; 
  },
  f3: function (n1, n2) {
    return n1 - n2;
  }
};

// 1
console.log(o1.f1(4,5));
//false

// 2
let a = o1.f2(1,1);
console.log(a);
//2

// 3
if (o1.f1(42, 21)) {
  console.log("A");
} else {
  console.log("B");
}
//"A"

// 4
if (o1.f1(1,2)) {
  console.log(o1.f3(1,1) + o1.f2(2,2));
} else {
  console.log(o1.f3(1, o1.f2(6,4)) + o1.f2(2,2));
}
//-5

// 5
for (let i = 0; i < 2; i++) {
  for (let j = i; j < i + 2; j++) {
    console.log(o1.f2(i, j));
  }
}
//0, 1, 2, 3
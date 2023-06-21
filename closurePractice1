function makeAdder(x) {
    console.log("x",x)
  return function (y) {
      console.log("y",y)
    return x + y;
  };
}
/* output :
x 5
x 10
7
y 2
y 3
13
 */
const add5 = makeAdder(5);  // 5 will be  x 
const add10 = makeAdder(10); // 10 will be  y

console.log(add5(2)); //2 will be y
// 5 +2 = 7
console.log(add10(3)); // 3 will be y
// 10+ 3 = 13

const counter = () => {
  let counterVal = 0;

  const manipulateBy = (val) => {
    counterVal += val;
  };

  return {
    increment() {
      manipulateBy(1);
    },
    decrement() {
      manipulateBy(-1);
    },
    value() {
      return counterVal;
    },
  };
};

const c1 = counter();
const c2 = counter();
console.log("******Before manipulation*****");
console.log(c1.value());
console.log(c2.value());
c1.increment();
c1.increment();
console.log("******After incrementing c1*****");
console.log(c1.value());
console.log(c2.value());
c1.decrement();
console.log("******After decrement c1*****");
console.log(c1.value());
console.log(c2.value());

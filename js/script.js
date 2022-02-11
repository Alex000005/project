"use strict";

console.log('arr' + " - object");
console.log(4 + '5');
console.log(4 + +'5');

let incr = 10,
    decr = 10;

incr++; //operator inkrement, postsfiksnaja forma  +1
decr--; //operator dekrement, postsfiksnaja forma  -1
// ili ++incr; operator inkrement, prefiksnaja forma +1
//     --decr; operator dekrement, prefiksnaja forma -1
console.log(incr++);
console.log(decr++);
console.log(++incr);
console.log(--decr);


const isChecked = true,
      isClose = false;

console.log(isChecked && !isClose); // ! - operator otrecanija (false stajet true)
// && true esli isChecked, isClose - true
// && false esli isChecked, isClose - false
console.log(isChecked || isClose); 
// || true esli isChecked ili isClose - true
// || false esli isChecked i isClose - false
console.log(2 + 2 * 2 != '6'); // true, 6 = 6, bez uchota strok i chisel
console.log(2 + 2 * 2 !== '6'); // false, ravenstvo strogo po tipu


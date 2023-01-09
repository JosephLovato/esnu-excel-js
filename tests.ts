import { MODULE_0, MODULE_1, MODULE_2, MODULE_3, FINAL_MODULE_BASED } from "./final_scripts.js"


// https://rosettacode.org/wiki/Combinations_with_repetitions#JavaScript
function combsWithRep<T>(n: number, lst: Array<T>): Array<Array<T>> {
  return n ? (
    lst.length ? combsWithRep(n - 1, lst).map(function (t) {
      return [lst[0]].concat(t);
    }).concat(combsWithRep(n, lst.slice(1))) : []
  ) : [[]];
};


function group_esnu_fn(n: number, fn: Function) {
  var combs = combsWithRep(n, [3, 2, 1, 0]);
  var dict = {};
  dict[3] = []
  dict[2] = []
  dict[1] = []
  dict[0] = []
  for (var i = 0; i < combs.length; i++) {
    dict[fn([combs[i]])].push(combs[i]);
  }
  return dict;
}

console.log("Module 0/4: ", group_esnu_fn(2, MODULE_0));
console.log("Module 1: ", group_esnu_fn(4, MODULE_1));
console.log("Module 2: ", group_esnu_fn(2, MODULE_2));
console.log("Module 3: ", group_esnu_fn(3, MODULE_3));
console.log("Final Module-Based: ", group_esnu_fn(5, FINAL_MODULE_BASED));

// const naeem = {
//   fullname: { First: "Md Naeem", Last: "Khan" },
//   age: 29,
//   birthday: "26/06/1993",
// };

// console.log(naeem.birthday);
// naeem.age = 32;
// console.log(naeem);
// let numbers = [11, 22, 33, 44, 55];
// console.log();

// function foreach(number, myfunction) {
//   for (let i = 0; i < number.length; i++) {
//     myfunction(number[i]);
//   }
// }

// foreach(numbers, (value) => {
//   console.log(value);
// });

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.getElementById("value").innerText =
    parseInt(input1.value) + parseInt(input2.value);
});

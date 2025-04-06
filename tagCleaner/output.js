let Input = [
  " JavaScript ",
  "python",
  "JAVASCRIPT",
  " machine-learning",
  "Python  ",
  " Data Science!",
  "machine_learning",
];

let res = Input.map((item)=>{
    return item.trim();
})

let res1 = res.map((item) =>
  item
    .split("")
    .filter(
      (char) =>
        (char >= "A" && char <= "Z") ||
        (char >= "a" && char <= "z") ||
        (char >= "0" && char <= "9")
    )
    .join("").toLowerCase()
);

let result=res1.join(", ");

console.log(result);








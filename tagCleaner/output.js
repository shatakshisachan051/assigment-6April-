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



console.log(res.join(", "))



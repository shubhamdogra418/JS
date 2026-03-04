//function + scope is closure

function hello() {
  let a = 10;
  function hey() {
    return a;
  }
}
console.log(hello());

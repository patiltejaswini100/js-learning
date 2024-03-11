console.log(
  "=============================Assignment-1==========================="
);

console.log("-------------------Step-1--------------------");

function show() {
  console.log("I am studying Angular Web development");
  console.log("Place: Codemind Technology");
}
show();

console.log("-------------------Step-2--------------------");

function personalDetails(firstName, lastName, collegeName) {
  console.log("First Name:", firstName);

  console.log("Last Name:", lastName);

  console.log("College Name:", collegeName);
}
personalDetails("Tejaswini", "Patil", "HRPIPER-Shirpur");

console.log("-------------------Step-3--------------------");

console.log("-------------------Step-3A--------------------");
function swapValue(arg1, arg2) {
  console.log("arg1 value before swap:", arg1);
  console.log("arg2 value before swap:", arg2);
  var temp = arg1;
  arg1 = arg2;
  arg2 = temp;
  console.log("arg1 value after swap:", arg1);
  console.log("arg2 value after swap:", arg2);
}
swapValue("virat", "anushka");
console.log("-------------------Step-3B--------------------");
swapValue(1000, 2000);

console.log("-------------------Step-4--------------------");
function addThreeValues(a, b, c) {
  console.log("Arguments is :", a, b, c);
  var result = a + b + c;
  console.log("Result=", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello ", " Hi ", " Good Morning ");

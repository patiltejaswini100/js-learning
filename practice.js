const sentence = "I am Angular Web Developer"
const vowels = "aeiou"
let vowelsCount = 0
for (let index = 0; index < sentence.length; index++) {
    let char = sentence.charAt(index);
    let lowercase = char.toLowerCase();
    if (vowels.includes(lowercase)) {
        vowelsCount++
    }
}console.log(vowelsCount);


//const word = "I am very good IT Developer";
//const vowels = "aeiou";
//let vowelsCount = 0;
//for (let index = 0; index < word.length; index++) {
   // let char = word.charAt(index);
   // let lowercase = char.toLowerCase();
   // if (vowels.includes(lowercase)) {
   //     vowelsCount++
   // }
    //}
//console.log(`Total number of vowels including small ang capital vowels: ${vowelsCount}`);

//var sweety = "SWEETY";
//var cutie = "CUTIE";
//var temp ="SWEETY";
//sweety=cutie;
//cutie=temp
//console.log("sweety:",sweety , "cutie:",cutie);

//var n1=100;
//var n2=200;
//var n3=300;
//var temp=n1;
//n1=n2;
//n2=n3;
//n3=temp;
//console.log("n1=",n1 );
//console.log("n2=",n2 );
//console.log("n3=",n3 );

function swapValues(n1,n2) {
    console.log("bef n1=",n1);
    console.log("bef n2=",n2);
    var temp =n1;
    n1=n2;
    n2=temp;
    console.log("aft n1=",n1);
    console.log("aft n2=",n2);

}
swapValues(100,200);
swapValues("Tejaswini","Mohit");


console.log("========================fun with arg no return value============================");
//function addValues(n1,n2,n3) {
//    var add = n1+n2+n3;
 //   console.log(add);

//}
//addValues(100,200,300);
//addValues("Tejaswini","Mohit","Patil");

console.log("========================fun with no arg no return value============================");
//function addValues() {
 //   var n1=100;
 //   var n2=200;
  //  var n3=300;
  //  var add= n1+n2+n3;
  //  console.log("Addition is:", add);
  //Addition is: 600

   // var n4="Tejaswini";
    //var n5="Mohit";
    //var n6="Patil";
    //var add1= n4+n5+n6;
   // console.log("Addition is:", add1);
//}
//addValues()==>Addition is: TejaswiniMohitPatil

console.log("========================fun with return value============================");
function addValues(n1,n2,n3) {
    var result= n1+n2+n3
    return result;
}
var returnValue=addValues(1,2,3)
console.log("Addition is : ",returnValue);

var returnValue=addValues(4,5,6);
console.log("Addition is : ",returnValue);
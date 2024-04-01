
function factorialOfNum(arg) {
    let fact=1;
    for (let index = arg; index >0 ; index--) {
        fact=fact*index;
        
    }
    console.log(`Factorial of ${arg} is: ${fact}`);
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);





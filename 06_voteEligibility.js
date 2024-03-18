function voteEligible(age) {
    if (age<=0 || age>130 || age==null) {
        console.log(`Invalid age: ${age}`);
    } else {
        if (age<18) {
            console.log(`Age:${age}=====>Not eligible for vote`);
        } else {
            if (age>=18) {
                console.log(`Age:${age}=====>Eligible for vote`);
            }
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);

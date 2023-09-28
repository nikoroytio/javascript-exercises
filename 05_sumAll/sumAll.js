const sumAll = function(num1,num2) {

    if (num1 > num2){
        [num1,num2] = [num2, num1];
    }

    let sum = 0;
    for (;num1 <= num2; num1++) {
        sum += num1;    
    }
    console.log(sum)
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

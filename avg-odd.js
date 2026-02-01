function avgOdd(numbers){
    let count=0;
        let sum=0;
    for(const num of numbers){
        
        if(num%2===1){
            count++;
            sum+=num;
        }
    }

    return sum / count;
    
}


const numbers = [1, 7, 3, 23, 45, 6, 7, 8, 9];

console.log('The numbers are :',numbers );

const average = avgOdd(numbers);

console.log('Average is :',average);
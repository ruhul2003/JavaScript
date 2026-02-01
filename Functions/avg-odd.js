function avgOdd(numbers){
    for(const num of numbers){
        let count=0;
        let sum=0;
        if(num%2===1){
            count++;
            sum+=num;
            avg=sum/count;
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('The numbers are :',numbers )
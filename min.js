const numbers = [1, 7, 3, 23, 45, 6, 7, 8, 9];

function minimum(numbers){
    let min_num = numbers[0];

    for(const num of numbers){
        if(num < min_num){
            min_num = num;
        }
    }

    return min_num;
}

const lowest = minimum(numbers);
console.log('Minimum number is:', lowest);

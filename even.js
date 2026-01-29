const input=[12, 98, 5, 41, 23, 78, 46];

let even=[];

for(let i=0 ; i<input.length ; i++){
    if(input[i]%2 == 0){
        even.push(input[i]);
    }
}
console.log(even);
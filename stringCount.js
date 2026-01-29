let string="I am a web developer on a small company";

let count=0;

for(let i=0;i<string.length;i++){
    if(string[i]=="n"){
        count++;
    }
}

console.log(count);
let even=[];
let odd=[];

for(let i=0;i<=100;i++){
    if(i==0){
        even.push(i);
    }
    else if(i%2==0){
        even.push(i);
    }
    else{
        odd.push(i);
    }
}
console.log(even,odd);

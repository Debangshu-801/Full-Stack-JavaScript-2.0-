
function square(num){
    let icon='';
for(let i=0;i<num;i++){
    for(let j=0;j<=num;j++){
        icon +='* ';
    }
    icon+='\n'
    
}

console.log(icon);
}

square(50)
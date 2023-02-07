function triangle(num){
    let icon='';
    for(let i=0;i<num;i++){
    for(let j=0;j<=i;j++){
        icon +='* ';
    }
    icon+='\n'
    
}

console.log(icon);
}

triangle(4)
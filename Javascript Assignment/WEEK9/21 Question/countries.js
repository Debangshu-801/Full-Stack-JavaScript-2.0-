
function countrypresent(country){
    let ispresent;
    for(let i=0;i<=countries.length;i++){
        if(countries[i]=='Ethiopia'){
            console.log(countries[i].toUpperCase());
            ispresent=true;
        }
    }
    if(ispresent!=true){
        countries.unshift('Ethiopia');
    }
}

let countries=['India','Bangladesh','Ethiopia','England'];

countrypresent(countries);
console.log(countries)
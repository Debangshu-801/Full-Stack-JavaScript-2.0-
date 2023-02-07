let item;
 let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
function addvalue(item){
    let present;
    let present1;
    if(item=='Meat'){
        for(let i=0;i<=shoppingCart.length;i++){
            // console.log(shoppingCart.length);
        if(shoppingCart[i]=='Meat'){
            console.log('Already Meat Present.'); 
            present=1;
        }
        
    }
}
    else if(item=='Sugar'){
        for(let i=0;i<=shoppingCart.length;i++){
        // console.log(shoppingCart.length);
     if(shoppingCart[i]=='Sugar'){
        console.log('Already Sugar Present.'); 
        present1=1;
    }
    
    }
}
    
    
if(present!=1 && item=='Meat'){
   shoppingCart.unshift(item); 
    console.log(shoppingCart);
}

if(present1!=1 && item=='Sugar'){
    shoppingCart.push(item); 
     console.log(shoppingCart);
 }

}

addvalue('Meat');
addvalue('Meat');
addvalue('Sugar');
addvalue('Sugar');
addvalue('Sugar');

console.log(shoppingCart);
shoppingCart.splice(4,1)
console.log(shoppingCart);
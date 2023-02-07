// let num=90;

function prime(num){
let i,m=0,flag=0;      
m=num/2;      
if(num==0||num==1){  
 console.log(num+" is not prime number");      
}else{  
 for(let i=2;i<=m;i++){      
  if(num%i==0){      
   console.log(num+" is not prime number");      
   flag=1;      
   break;      
  }      
 }      
 if(flag==0)  { console.log(num+" is prime number"); }  
}
}
prime(27);
prime(70.00099);
prime(702);
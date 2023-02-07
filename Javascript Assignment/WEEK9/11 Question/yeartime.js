const date= new Date();
console.log('What is the year today?','\n',date.getFullYear());

console.log('What is the month today as a number?','\n',date.getMonth());


console.log('What is the date today?','\n',date.getDate());

console.log('What is the day today as a number?','\n',date.getDay());

console.log('What is the hours now?','\n',date.getHours());

console.log('What is the minutes now?','\n',date.getMinutes());


let past=new Date('1970-01-01');
let now=new Date();
let elapsed=now-past;
console.log(elapsed/1000);
// console.log('What is the day today as a number?','\n',date.getFullYear());

// console.log('What is the day today as a number?','\n',date.getFullYear());

// console.log('What is the day today as a number?','\n',date.getFullYear());

// format YYYY-MM-DD HH:mm 
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
      ].join(':')
    );
  }
  console.log(formatDate(new Date()));  

//   format DD-MM-YYYY HH:mm

function formatDate1(date) {
    return (
      [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
       
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
      ].join(':')
    );
  }
  console.log(formatDate1(new Date()));  
// DD/MM/YYYY HH:mm

function formatDate2(date) {
    return (
      [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
       
      ].join('/') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
      ].join(':')
    );
  }
  console.log(formatDate2(new Date()));  
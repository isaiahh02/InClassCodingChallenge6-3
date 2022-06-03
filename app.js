const dates = (firstDate, secondDate) =>{
  let difference = firstDate.getTime() - secondDate.getTime(); //difference between two dates 
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)); //converted milliseconds into days
   return TotalDays;
}
let firstDate = new Date('5-27-2022');
let secondDate = new Date('6-3-2023');
console.log(dates(firstDate, secondDate) + " days in between.");
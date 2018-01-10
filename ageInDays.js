let minute = 1000 * 60;
let hour = minute * 60;
let day = 24 * hour;
let week = 7 * day;
let year = 365.25 * day;

let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

let dateVal1 = /\d{4}\W\d{1,2}\W\d{1,2}/;
let dateVal2 = /\d{1,2}\W\d{1,2}\W\d{4}/;
let dateVal3 = /[a-z]{3,}/;

let bd;

function getVal(){
  let userBDay = document.getElementById('bday').value;
  let today = new Date();
  console.log(userBDay);
  console.log(today);
  
  if (dateVal1.test(userBDay)) {
    bd = new Date(userBDay.replace(/\W*/, '/'));
    console.log(bd + " matched with 1st validation");
    
  } else if (dateVal2.test(userBDay)) {
    let y = /\d{4}/.exec(userBDay);
    let m = /\W\d{1,2}\W/.exec(userBDay);
    let d = /^\d{1,2}/.exec(userBDay);
    bd = new Date((y + m + d).replace(/\W*/, '/'));
    console.log(bd + " matched with 2nd validation");
  } else {
    if (document.getElementById("language").innerHTML === "English"){
      alert("Veuillez entrer une date valide");
    } else {
      alert("Please enter a valid date");
    }
    console.log(bd + " not matched");
    document.getElementById("result").innerHTML = "";
    document.getElementById("resultInHours").innerHTML = "";
    return;
  }
  
  let diffInMilli = today.getTime() - bd.getTime();
  let ageInDays = Math.floor(diffInMilli / day);
  let ageInHours = Math.floor(diffInMilli / hour);
  console.log(bd + ' ' + today);
  
  if (document.getElementById("language").innerHTML === "English"){
    document.getElementById("result").innerHTML = "Vous avez " + ageInDays + " jours";
    document.getElementById("resultInHours").innerHTML = "Vous avez " + ageInHours + " heures";
  } else {
    document.getElementById("result").innerHTML = "You are " + ageInDays + " days old";
    document.getElementById("resultInHours").innerHTML = "You are " + ageInHours + " hours old";
  }
}


function setLang() {
  document.getElementById("En").style.display = "block";
  document.getElementById("Fr").style.display = "none";

}

function toggleLang(){
  document.getElementById("result").innerHTML = "";
  document.getElementById("resultInHours").innerHTML = "";
  let defLang = document.getElementById("En");
  let secLang = document.getElementById("Fr");
  if (defLang.style.display === "block") {
    console.log(defLang.style.display);
    secLang.style.display = "block";
    defLang.style.display = "none";
    document.getElementById("language").innerHTML = "English"
  } else {
    console.log(defLang.style.display);
    secLang.style.display = "none";
    defLang.style.display = "block";
    document.getElementById("language").innerHTML = "Francais"
  }
}

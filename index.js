let settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle(){
  settingsmenu.classList.toggle("settings-menu-height");
}

let darkBtn = document.getElementById("dark-btn");

//darkBtn.onclick = function(){
  //darkBtn.classList.toggle("dark-btn-on");
  
//}

function toggleDarkBtn() {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  //on click update local storage
  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
  }
  else{
    localStorage.setItem("theme", "light");
  }



}

  // Saving the theme to local storage so as not to change after refresh

if(localStorage.getItem("theme") == "light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
else{
  localStorage.setItem("theme", "light"); // default theme for first time visitor
}

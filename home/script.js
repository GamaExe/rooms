const form_home =  document.getElementById("home-busca");
const form_loc =  document.getElementById("local");
const form_per =  document.getElementById("periodo");

form_home.addEventListener("submit", function(evt){
    evt.preventDefault();
    console.log(form_loc.value, form_per.value);
    window.location = "./quartos/index.html";
})




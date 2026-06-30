alert("Welcome to Doctor Appointment Scheduler");
var searchBtn = document.getElementById("searchBtn");
if(searchBtn){
searchBtn.onclick = function(){
var doctor = document.getElementById("searchDoctor").value;
if(doctor == ""){
alert("Please enter doctor name.");
}
else{
alert("Searching for " + doctor);
}
}
}
var bookBtn = document.getElementById("bookBtn");
if(bookBtn){
bookBtn.onclick = function(){
alert("Appointment Booked Successfully.");
}
}
var contactForm = document.getElementById("contactForm");
if(contactForm){
contactForm.onsubmit = function(event){
event.preventDefault();
alert("Your Message Has Been Sent.");
}
}
var profileButtons = document.querySelectorAll(".profileBtn");
for(var i=0;i<profileButtons.length;i++){
profileButtons[i].onclick=function(){
alert("Doctor Profile");
}
} 
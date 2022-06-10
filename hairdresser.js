function home() {
	window.location.href="hairdresser.html"
}
function contact() {
	window.location.href="contact.html";
}
function book() {
	window.location.href="book.html";
}
function services() {
	window.location.href="services.html";
}
function team() {
	window.location.href="team.html";
}
function toOne() {
	var p1=document.getElementById("p1");
	var p2=document.getElementById("p2");
	var p3=document.getElementById("p3");
	p1.style.display="block"
	p2.style.display="none";
	p3.style.display="none";
}
function toTwo() {
	var p1=document.getElementById("p1");
	var p2=document.getElementById("p2");
	var p3=document.getElementById("p3");
	p1.style.display="none"
	p2.style.display="block";
	p3.style.display="none";
}
function toThree() {
	var p1=document.getElementById("p1");
	var p2=document.getElementById("p2");
	var p3=document.getElementById("p3");
	p1.style.display="none"
	p2.style.display="none";
	p3.style.display="block";
}
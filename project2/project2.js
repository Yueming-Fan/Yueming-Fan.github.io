var name = document.getElementById("name");
var gender = document.getElementById("gender");
var age = document.getElementById("age");
function checkAge() {
	if (parseInt(age)>=19) {
		window.location.href="lesson2-1.html";
	}
	window.location.href="lesson2-2.html";
}
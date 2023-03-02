const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const name = form.elements["name"].value;
	const email = form.elements["email"].value;
	const message = form.elements["message"].value;

	const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

	localStorage.setItem("formData", data);

	window.location.href = "data.html";
});

const storedData = localStorage.getItem("formData");

if (storedData) {
	document.getElementById("data").textContent =

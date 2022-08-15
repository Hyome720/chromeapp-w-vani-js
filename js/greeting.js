const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const link = document.querySelector("a");

function paintGreetings() {
	const userName = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello! ${userName}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
	event.preventDefault();
	localStorage.setItem(USERNAME_KEY, loginInput.value);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings()
}

function handleLinkClick(event) {
	event.preventDefault();
	console.log(event);
}

link.addEventListener("click", handleLinkClick)

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings()
}
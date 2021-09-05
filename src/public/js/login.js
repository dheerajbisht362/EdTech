const form = document.getElementById("login");
form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const username = document.getElementById("Username").value;
	const password = document.getElementById("Password").value;

	const result = await fetch("/user/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			password,
			token: localStorage.getItem("token"),
		}),
	}).then((res) => res.json());
	if (result.status === "ok") {
		localStorage.setItem("token", JSON.stringify(result.data));

		return (window.location.href = "/jsDescription");
		// alert("success");
	}

	alert("Invalid Username or Password");
});

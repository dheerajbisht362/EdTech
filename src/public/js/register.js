const form = document.getElementById("reg-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("Name").value;
  const username = document.getElementById("Username").value;
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;

  const result = await fetch("/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      username,
      email,
      password,
    }),
  }).then((res) => res.json());
  if (result.status === "ok") {
    alert("success");
  } else {
    alert(result.error);
  }
});

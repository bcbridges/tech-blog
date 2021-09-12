if (window.location.pathname == "/") {
  //EVENT FOR LOGIN BUTTON CLICK
  document.querySelector("button").addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name="emailField"]').value;
    const password = document.querySelector('input[name="passField]').value;
    const body = { email, password };

    let response = fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
    } else {
      console.log(response);
    }
  });

  //EVENT FOR SIGNUP LINK CLICK
}

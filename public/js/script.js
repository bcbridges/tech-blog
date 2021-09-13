if (window.location.pathname == "/") {
  //EVENT FOR LOGIN BUTTON CLICK
  document.querySelector("button").addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#emailField").value;
    const password = document.querySelector("#passField").value;
    const body = { email, password };

    let response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("RETURNED ON PUBLIC SIDE");
      document.location.replace("/dashboard");
    } else {
      console.log(response);
    }
  });
}

if (window.location.pathname == "/signup") {
  //EVENT FOR SIGN UP BUTTON
  document
    .querySelector('button[name="signupBtn"]')
    .addEventListener("click", async (e) => {
      e.preventDefault();

      //GET USER INPUT VALUES
      let username = document.querySelector('input[id="username"]').value;
      let email = document.querySelector('input[id="email"]').value;
      let first_name = document.querySelector('input[id="firstName"]').value;
      let last_name = document.querySelector('input[id="lastName"]').value;
      let password = document.querySelector('input[id="pass"]').value;
      let pass2 = document.querySelector('input[id="passRepeat"]').value;

      if (username && email && first_name && last_name && password && pass2) {
      } else {
        return window.alert("PLEASE FILL IN ALL FIELDS");
      }

      // CHECK THAT BOTH PASSWORDS ARE THE SAME
      if (password !== pass2) {
        return window.alert("Passwords do not match.");
      }

      let body = { username, email, first_name, last_name, password };
      // POST CALL WITH ENTERED INFORMATION
      console.log("SENDING POST REQUEST TO BACKEND");

      const response = await fetch("/api/user/new", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        console.log("RESPONSE WAS NOT GUCCI");
        console.log(response);
      }
    });
}

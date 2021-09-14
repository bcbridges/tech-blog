// IF THE USER IS ON
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
      document.location.replace("/dashboard");
    } else {
      console.log(response);
    }
  });
}

// IF THE USER IS ON THE SIGNUP PAGE, USE THE FOLLOWING
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

// IF THE USER IS ON THE DASHBOARD, SETUP THE FOLLOWING
if (document.location.pathname == "/dashboard") {
  document.querySelector("#newPostBtn").addEventListener("click", () => {
    document.location.replace("/NewPost");
  });

  // SELECT ALL COMMENT BUTTONS AND LOOP THROUGH TO ADD EVENT LISTENER TO EACH
  let commentBtns = document.querySelectorAll(".commentBtn");
  commentBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      document.location.replace(`/dashboard/comments/${e.target.value}`);
    });
  });
}

if (document.location.pathname == "/NewPost") {
  document.querySelector("#cancelBtn").addEventListener("click", () => {
    document.location.replace("/dashboard");
  });

  document.querySelector("#createBtn").addEventListener("click", async (e) => {
    e.preventDefault();

    // GET USER INPUT POST TITLE AND BODY
    let post_title = document.querySelector("#post_title").value.trim();
    let post_body = document.querySelector("#post_body").value.trim();
    let post_tag = document.querySelector('select[id="tagList"]').value;

    // MAKE SURE BOTH ARE FILLED IN
    if (!post_title || !post_body) {
      return window.alert(
        "Please make sure to fill in a title and description of your post."
      );
    }

    let body = { post_title, post_body, post_tag };

    let response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.alert("Post was created.");
      document.location.replace("/dashboard");
    } else {
      window.alert("Error creating post.");
      document.location.replace("/NewPost");
    }
  });
}
// IF THE USER IS NOT ON THE LOGIN OR SIGNUP PAGE, SET THE LOGOUT HANDLER

// FIX - DOES NOT WORK - KEEP AT BOTTOM OF JS FILE UNTIL FIXED
document.querySelector("#logoutBtn").addEventListener("click", async () => {
  let response = await fetch("/logout");

  if (response.ok) {
    document.location.replace("/");
  } else {
    window.alert("Failed to Logout");
  }
});

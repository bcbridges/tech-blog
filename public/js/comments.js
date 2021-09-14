document
  .querySelector("#newCommentBtn")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    let post_id = document.querySelector("#mainPost").getAttribute("value");
    let newComment = document.querySelector("#newCommentText").value;
    let body = { post_id, newComment };
    console.log(body);
    let response = await fetch("/api/post/newcomment", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      window.alert("Error adding the comment.");
    }
  });

function learnMore() {
  alert("Welcome to my profile! Explore About Us to know more about me and my journey in Computer Science and AI.");
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thank you ${name}! Your message has been received.`);
  document.querySelector("form").reset();
}

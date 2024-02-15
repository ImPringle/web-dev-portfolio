// Document data
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submitBtn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#user_message");

// EmailJS data
const public_key = "yLE1IZv1IiTlQ8QlZ";
const service_ID = "service_jnxfd9s";
const template_ID = "template_2vs8obk";

// Initialize EmailJS

emailjs.init(public_key);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  emailjs.send(service_ID, template_ID, inputFields).then(
    () => {
      submitBtn.innerText = "Sent";
      submitBtn.setAttribute("disabled", "");
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      console.log(error);
      submitBtn.innerText("Error");
    }
  );
});

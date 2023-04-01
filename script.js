var typed = new Typed(".auto-type", {
  strings: ["programmer", "designer", "writer"],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
});

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

{
  /* <script src="https://smtpjs.com/v3/smtp.js"></script> */
}
{
  /* <script> */
}
//     function sendEmail(){
//         Email.send({
//     Host : "smtp.gmail.com",
//     Username : "voidgotnochill15@gmail.com",
//     Password : "omega11#",
//     To : 'thedeepak1587@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "New Contact Form Enquiery",
//     Body : "Name: "+document.getElementById("name").value+
//     "<br> Email:"+document.getElementById("email").value+"<br> Message:"+document.getElementById("message").value
// }).then(
//   message => alert(message)
// );

function sendEmail() {
  alert(
    "name: " +
      document.getElementById("name").value +
      "\nemail: " +
      document.getElementById("email").value +
      "\nmessage: " +
      document.getElementById("message").value
  );
  // + "Email: "+document.getElementById("email").value
  // +"Message: "+document.getElementById("message").value)
}

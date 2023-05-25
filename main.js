$(document).ready(function () {
  $("form").submit(handleSubmit);
});

async function handleSubmit(event) {
  event.preventDefault();
  console.log("Input Meno:", $('#first_name'). val());
  console.log("Input Email:", $('#first_name'). val());
  console.log("Input Správa:", $('#message'). val());

  var msg = $('#msg').val();
  var email = $('#email').val();
  
  console.log(msg);
}
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('first_name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('exampleFormControlTextarea1').value;

  const requestBody = {
    systemEmail: 'vas.email.kde@vam.pride.text.z.formulara',
    contactEmail: email,
    message: message
  };

  fetch('https://emailsenderitweek.azurewebsites.net/api/ContactForm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(data => {
      // Handle the response data
      if (data === 'The entered system email is not valid') {
        // Handle system email validation error
      } else if (data === 'The entered contact email is not valid') {
        // Handle contact email validation error
      } else if (data === 'The message is empty, your request has not been sent') {
        // Handle empty message error
      } else if (data === 'Email has been sent') {
        // Handle successful email sending
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
});
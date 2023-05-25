$(document).ready(function () {
  $("form").submit(handleSubmit);
});

async function handleSubmit(event) {
  event.preventDefault();
  
  // Anti-spam question
  var answer = prompt("Aké je hlavné mesto Malty?");
  
  if (answer === "Valletta") {
    console.log("Input Meno:", $('#first_name').val());
    console.log("Input E-mailova adresa:", $('#email').val());
    console.log("Input Správa:", $('#message').val());

    var msg = $('#message').val();
    var email = $('#email').val();

    let data = {
      systemEmail: 'kristina.dubrovcakova@gmail.com',
      contactEmail: email,
      message: $('#first_name').val() + "," + msg
    };
    console.log("Data:", data);
    
    let response = await fetch("https://emailsenderitweek.azurewebsites.net/api/ContactForm", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    });
    
    let result = await response.json();
    console.log("Odpoveď SMTP API:", result);

    if (result === "Zadaný systémový email nie je validný") {
      alert("Zadaný systémový email nie je validný");
    } else if (result === "Zadaný kontaktný email nie je validný") {
      alert("Zadaný kontaktný email nie je validný");
    } else if (result === "Správa je prázdna, vaša žiadosť nebola odoslaná") {
      alert("Správa je prázdna, vaša žiadosť nebola odoslaná");
    } else if (result === "Email bol odoslaný") {
      alert("Email bol odoslaný");
      form.reset();
    }
  } else {
    alert("Vaša odpoveď je nesprávna a vaša odpoveď sa nenahrala.");
  }
}

  // let prevText = $('#sbtn') . text();
  // if (response.status === 200){
  //   const res = await response.json();
  //   $('#sbtn') . text(res);
  //   await new Promise(r => setTimeout(r, 2500));
  //   $('#sbtn') . text(prevText);
  //   if (res === 'Email bol odoslaný') document.getElementById("contactForm").reset();
  // }
  // else {
  //   $('#sbtn') . text("Odoslanie zlyhalo");
  //   await new Promise(r => setTimeout(r, 2500));
  //   $('#sbtn') . text(prevText);
    
  // }
  // if (data === 'Zadaný systémový email nie je validný') {

  //   alert('Zadaný systémový email nie je validný');

  // } else if (data === 'Správa je prázdna, vaša žiadosť nebola odoslaná') {

  //   alert('Správa je prázdna, vaša žiadosť nebola odoslaná');
  // } else if (data === 'Email bol poslany') {

  //   alert('Email bol odoslaný');
  //   form.reset();
  // }


  // let hov = await response.json();
  
  // console.log("Odopoved SMTP API:", await response.json());
// }
// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const firstName = document.getElementById('first_name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('exampleFormControlTextarea1').value;



//   fetch('https://emailsenderitweek.azurewebsites.net/api/ContactForm', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(requestBody)
//   })
//     .then(response => {
//       if (response.ok) {
//         return response.text();
//       } else {
//         throw new Error('Error: ' + response.status);
//       }
//     })
//     .then(data => {
//       // Handle the response data
//       if (data === 'The entered system email is not valid') {
//         // Handle system email validation error
//       } else if (data === 'The entered contact email is not valid') {
//         // Handle contact email validation error
//       } else if (data === 'The message is empty, your request has not been sent') {
//         // Handle empty message error
//       } else if (data === 'Email has been sent') {
//         // Handle successful email sending
//       }
//     })
//     .catch(error => {
//       // Handle any errors that occurred during the request
//       console.error('Error:', error);
//     });
// });
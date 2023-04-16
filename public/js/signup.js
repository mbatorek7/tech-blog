const submitBtn = document.getElementById("signup");

const signupFormHandler = async (e) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    e.preventDefault();

    // Gather the data from the form elements on the page
    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    console.log(email, password);

    if (email && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/users/create', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

       console.log(response);
       const user = await response.json();
       console.log(user); 
    }
};

submitBtn.addEventListener('click', (e) => signupFormHandler(e));
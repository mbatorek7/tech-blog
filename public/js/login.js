const submitBtn = document.getElementById("login");

const loginFormHandler = async (event) => { console.log("click")
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  submitBtn.addEventListener('click', (e) => loginFormHandler(e));
  
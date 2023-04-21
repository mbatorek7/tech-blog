const submitBtn = document.getElementById("create-btn");

const createPostFormHandler = async (e) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    e.preventDefault();

    // Gather the data from the form elements on the page
    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('content').value.trim();

    const response = await fetch('/api/users/post', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    const user = await response.json();
    document.location.replace("/dashboard");
};

submitBtn.addEventListener('click', (e) => createPostFormHandler(e));
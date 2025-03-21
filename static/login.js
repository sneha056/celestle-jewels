document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send data to the server
    fetch('http://127.0.0.1:5000/login', {  // Use the correct endpoint for login
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),  // Only send email and password
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert('Login successful! Continue Shopping');
            window.location.href = 'C:/Users/WIN 10/Downloads/abc/abc/celestle-jewels/index.html';  // Redirect to dashboard or home page
        } else {
            alert('Login failed: ' + data.message);  // Show error message
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('This account is not registerd');  // Show generic error message
    });
});
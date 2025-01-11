document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert or send data to a server (here we just show an alert)
    alert(Message Sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message});

    // Optionally, reset the form
    document.getElementById('contact-form').reset();
});
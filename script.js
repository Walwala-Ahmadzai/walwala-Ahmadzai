function displayContactInfo() {
    const contactInfo = `
        <html>
            <head>
                <title>Contact Information</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #e6f0ff; /* Light blue background */
                        color: #333; /* Default text color */
                        text-align: center;
                        padding: 20px;
                    }
                    h2 {
                        color: #003366; /* Dark blue for header */
                    }
                    a {
                        color: #007BFF; /* Link color */
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline; /* Underline on hover */
                    }
                </style>
            </head>
            <body>
                <h2>Contact Me</h2>
                <p>Email: <a href="mailto:walwalaahmadzai7@gmail.com">walwalaahmadzai7@gmail.com</a></p>
                <p>Phone: <a href="tel:+31657253988">+31 657253988</a></p>
            </body>
        </html>
    `;
    const newWindow = window.open();
    newWindow.document.write(contactInfo);
    newWindow.document.close();
}


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
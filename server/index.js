// server.js

const express = require('express');
const bodyParser = require('body-parser');
const handleUSSD = require('./ussd');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Endpoint to handle USSD requests
app.post('/ussd', async (req, res) => {
    const params = req.body;
    try {
        console.log("API/POST/USSD", { params, });

        const { sessionId, serviceCode, phoneNumber, text } = params;

        if (!sessionId) return res.status(400).send({ status: false, message: "Session ID not provided" });
        if (!serviceCode) return res.status(400).send({ status: false, message: "Service code not provided" });
        if (!phoneNumber) return res.status(400).send({ status: false, message: "Phone number not provided" });

        const response = await handleUSSD(params)
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

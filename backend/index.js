const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Make sure to add this line

const app = express(); // Removed the unnecessary argument
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "f187e078-93fa-4091-9605-0f181776d0ae" } } // Corrected the header
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response?.status || 500).json(e.response?.data || { error: 'An error occurred' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001'); // Added a log statement for clarity
});

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const clientID = process.env.SPOTIFY_CLIENT_ID;
const clientSECRET = process.env.SPOTIFY_CLIENT_SECRET;

const basicAuth = Buffer.from(`${clientID}:${clientSECRET}`).toString('base64');

app.get('/', (req, res) => {
    res.send('Welcome to the Spotify Backend API!');
})

app.get('/events', async (req, res) => {
    const artist_name = req.query.artist;
    const ticketMasterAPIKey = process.env.TICKETMASTER_API_KEY;

    try {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketMasterAPIKey}&keyword=${artist_name}`

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error("Tickemaster API Error!");
        }

        let final_data;

        if (data._embedded) {
            final_data = data;
        } else {
            final_data = {_embedded: {eventss: []}};
        }

        res.json(final_data);


    } catch (error) {
        res.status(500).json({error: "Failed to fetch events!"});
    }
});


app.get('/token', async (req, res) => {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${basicAuth}`,
            },
            body: new URLSearchParams({grant_type: 'client_credentials'}),
        });

        if (!response.ok) {
            throw new Error("Spotify API Error!");
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch Spotify token'});
    }
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
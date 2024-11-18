# VibeFinder

Welcome to the **VibeFinder**! A Spotify-TicketMaster Playlist Generator. This application allows users to select their favorite music genres, generate personalized Spotify playlists, and view events for artists in the playlist using the TicketMaster API. It combines music discovery with event exploration in a sleek, modern, and user-friendly interface.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [How It Works](#how-it-works)
5. [API Integration](#api-integration)
    - [Spotify API](#spotify-api)
    - [TicketMaster API](#ticketmaster-api)
6. [Database Schema](#database-schema)
7. [File Structure](#file-structure)
8. [Future Enhancements](#future-enhancements)
9. [Acknowledgments](#acknowledgments)

---

## Overview

The **Spotify-TicketMaster Playlist Generator** is a web application designed to streamline the music discovery and concert-finding process. Users can explore new songs based on their favorite genres and instantly find live events for featured artists.

---

## Features

- **Genre Selection**: Users can choose from various music genres displayed as interactive "pills."
- **Personalized Playlists**: Fetches curated Spotify playlists tailored to the selected genres.
- **Event Finder**: Displays artist events and concerts using the TicketMaster API.
- **Modern Design**: Intuitive and sleek UI with responsive features and smooth scrolling navigation.
- **Dynamic Updates**: A database caches event information for artists, minimizing redundant API requests.

---

## Technologies Used

### Frontend:
- **HTML5**: Markup for structuring content.
- **CSS3**: Styling with responsive design.
- **JavaScript (ES6)**: Interactivity, DOM manipulation, and API handling.

### Backend:
- **Node.js**: Server-side JavaScript for API integration.
- **PHP**: Manages database communication for cached event data.

### APIs:
- **Spotify API**: Fetches playlists and song data.
- **TicketMaster API**: Retrieves event and concert details for selected artists.

### Database:
- **MySQL (via SiteGround)**: Stores artist-event data for quick retrieval.

---

## How It Works

1. **Genre Selection**: Users interact with a set of genre "pills." Selected genres are highlighted, and the choices are sent to the Spotify API.
2. **Playlist Generation**: The backend fetches a playlist for each selected genre. Songs are combined, and duplicates are removed before displaying them to the user.
3. **Event Finder**: Clicking on an artist retrieves events (if cached in the database) or queries the TicketMaster API and stores results for future use.
4. **Caching**: The database avoids redundant API requests by storing artist-event data.

---

## API Integration

### Spotify API
The Spotify API is used to:
- Authenticate via OAuth.
- Fetch playlists based on user-selected genres.
- Retrieve detailed song data (e.g., album art, song links, artist names).

### TicketMaster API
The TicketMaster API is used to:
- Search for events based on the artist’s name.
- Display live event locations, dates, and ticket links.
- Cache event data in the database for future use.

---

## Database Schema

Here is the database structure used for caching TicketMaster event data:

### Table: `events`
| Column         | Data Type     | Description                                     |
|----------------|---------------|-------------------------------------------------|
| `event_id`     | VARCHAR(255)  | Unique ID for each event (primary key).         |
| `artist_name`  | VARCHAR(255)  | Name of the artist related to the event.        |
| `event_name`   | VARCHAR(255)  | Name of the event or concert.                   |
| `venue`        | VARCHAR(255)  | Name of the venue hosting the event.            |
| `event_date`   | DATETIME      | Date and time of the event.                     |
| `ticket_url`   | VARCHAR(255)  | URL for purchasing tickets.                     |
| `created_at`   | TIMESTAMP     | Timestamp for when the event was cached.        |

---

### Backend Overview:
- **Node.js**: Handles API calls to Spotify.
- **PHP**: Handles database interactions with MySQL.

---

## Future Enhancements

1. **User Accounts**:
   - Allow users to save playlists and favorite events.
2. **Enhanced Search**:
   - Let users search for specific artists or songs directly.
3. **Event Recommendations**:
   - Suggest events based on the user’s listening history.
4. **Multi-Language Support**:
   - Add support for multiple languages to reach a broader audience.
5. **Social Sharing**:
   - Allow users to share playlists and events on social media.

---

## Acknowledgments

- **Spotify API**: For enabling seamless music discovery.
- **TicketMaster API**: For providing event data.
- **SiteGround**: For hosting our MySQL database.

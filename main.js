const fetch = require("node-fetch")
const {token} = require("./config.json")
fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
}).then(async (res) => await res.json()).then(res => {
    var artistsList = [];
    res.item.artists.forEach(artist => {
        artistsList.push(artist.name)
    });
    console.log(`Track Name: ${res.item.name}\nArtists: ${artistsList.join(", ")}\nIs Still Playing: ${res.is_playing ? "Yes" : "No"}\nPlay on Spotify: ${res.item.external_urls.spotify}`)
})
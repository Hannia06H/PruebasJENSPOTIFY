const SpotifyWebApi = require('spotify-web-api-node');

// Configurar credenciales de Spotify
const spotifyApi = new SpotifyWebApi({
    clientId: 'TU_CLIENT_ID',   // Sustituir por tu Client ID
    clientSecret: 'TU_CLIENT_SECRET', // Sustituir por tu Client Secret
    redirectUri: 'http://localhost:8888/callback'
});

// Obtener el token de acceso
spotifyApi.clientCredentialsGrant().then(
    function(data) {
        console.log('El token de acceso ha sido adquirido: ', data.body['access_token']);
        spotifyApi.setAccessToken(data.body['access_token']);

        // Hacer una búsqueda de una pista
        spotifyApi.searchTracks('Shape of You').then(
            function(data) {
                console.log('Pista encontrada:', data.body.tracks.items[0].name);
            },
            function(err) {
                console.error('Error al buscar la pista: ', err);
            }
        );
    },
    function(err) {
        console.error('Error al obtener el token de acceso:', err);
    }
);

const SpotifyWebApi = require('spotify-web-api-node');

// Inicializa el cliente de Spotify con tus credenciales
const spotifyApi = new SpotifyWebApi({
  clientId: 'TU_CLIENT_ID',
  clientSecret: 'TU_CLIENT_SECRET',
  redirectUri: 'TU_REDIRECT_URI'
});

// Autenticación con Spotify
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('La autenticación fue exitosa. El token de acceso es ' + data.body['access_token']);
    spotifyApi.setAccessToken(data.body['access_token']);
    
    // Obtener información de una pista de Spotify
    spotifyApi.getTrack('3n3Ppam7vgaVa1iaRUc9Lp') // Aquí usas el ID de una pista de Spotify
      .then(function(data) {
        console.log('Información de la pista:', data.body);
      }, function(err) {
        console.log('Error al obtener la pista:', err);
      });
  },
  function(err) {
    console.log('Algo salió mal al obtener el token de acceso:', err);
  }
);

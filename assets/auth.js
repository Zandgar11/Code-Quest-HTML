document.addEventListener("DOMContentLoaded", function() {
    const auth0Client = new auth0.WebAuth({
        domain: 'dev-6g76nn1gs3f82iz8.us.auth0.com',
        clientID: 'FGR4WYqLMM0xExSy5A4c0qW45wRuVRDB',
        redirectUri: window.location.origin + '/callback.html',
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    window.login = function() {
        auth0Client.authorize();
    }

    window.logout = function() {
        auth0Client.logout({
            returnTo: window.location.origin,
            clientID: 'FGR4WYqLMM0xExSy5A4c0qW45wRuVRDB'
        });
    }
});

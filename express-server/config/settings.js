"use strict";
var AuthSettings = (function () {
    function AuthSettings(google) {
        this.google = google;
    }
    return AuthSettings;
}());
exports.AuthSettings = AuthSettings;
var GoogleSettings = (function () {
    function GoogleSettings(clientId, clientSecret, callbackUrl) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.callbackUrl = callbackUrl;
    }
    return GoogleSettings;
}());
exports.GoogleSettings = GoogleSettings;
var FrontendSettings = (function () {
    function FrontendSettings(url) {
        this.url = url;
    }
    return FrontendSettings;
}());
exports.FrontendSettings = FrontendSettings;
//# sourceMappingURL=settings.js.map
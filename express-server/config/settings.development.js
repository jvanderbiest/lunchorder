"use strict";
var settings = require('./settings');
var DevelopmentSettings = (function () {
    function DevelopmentSettings() {
        this.production = false;
        var authSettings = new settings.AuthSettings(new settings.GoogleSettings("68064253471-f14osfm97vo2pialdkpu31ggm8lsn845.apps.googleusercontent.com", "z5oB9dWvHP0mG7l4QySg9X1r", "http://localhost:3000/auth/google/callback"));
        var frontendSettings = new settings.FrontendSettings("http://www.lunchorder.be:4200");
        this.auth = authSettings;
        this.frontend = frontendSettings;
    }
    return DevelopmentSettings;
}());
exports.DevelopmentSettings = DevelopmentSettings;
//# sourceMappingURL=settings.development.js.map
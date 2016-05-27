"use strict";
var Settings = require('../config/environment.dev');
var passport_google_oauth_1 = require('passport-google-oauth');
var Authorization = (function () {
    function Authorization() {
        var _this = this;
        this.GoogleStrategy = new passport_google_oauth_1.OAuth2Strategy({
            clientID: Settings.environment.authSettings.google.clientId,
            clientSecret: Settings.environment.authSettings.google.clientSecret,
            callbackURL: Settings.environment.authSettings.google.callbackUrl
        }, function (accessToken, refreshToken, profile, done) {
            console.log("Google has authentiated...");
            done(null, _this.extractProfile(profile));
        });
    }
    Authorization.prototype.extractProfile = function (profile) {
        console.log("Extracting profile2...");
        var imageUrl = '';
        if (profile.photos && profile.photos.length) {
            imageUrl = profile.photos[0].value;
        }
        console.log("User logged in: " + this.User.profile.displayName);
    };
    return Authorization;
}());
exports.Authorization = Authorization;

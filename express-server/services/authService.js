"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var inversify_1 = require('inversify');
var passport_google_oauth_1 = require('passport-google-oauth');
var user_1 = require('../domain/user/user');
var BearerStrategy = require('passport-http-bearer');
var cacheService_1 = require('../services/cacheService');
var AuthService = (function () {
    function AuthService(settings) {
        var _this = this;
        this.settings = settings;
        this.initBearerStrategy = function (token, done) {
            console.log("BearerStrategy called with token: " + token);
            console.log("user: " + _this.user);
            if (!_this.user) {
                return done(null, false);
            }
            if (_this.user) {
                if (_this.user.id == token) {
                    return done(null, _this.user);
                }
                else {
                    return done(null, false);
                }
            }
        };
        this.initOAuth2Strategy = function (accessToken, refreshToken, profile, done) {
            console.log("Google has authentiated...");
            var imageUrl = '';
            if (profile.photos && profile.photos.length) {
                imageUrl = profile.photos[0].value;
            }
            console.log("User logged in: " + profile.displayName);
            _this.cacheService.set(accessToken, profile, 360000, function () { });
            _this.user = new user_1.User(accessToken, "bla");
            console.log("saved user: " + _this.user);
            profile.access_token = accessToken;
            return done(null, profile);
        };
        this.cacheService = new cacheService_1.CacheService();
        this.BearerStrategy = new BearerStrategy.Strategy(this.initBearerStrategy);
        this.GoogleStrategy = new passport_google_oauth_1.OAuth2Strategy({
            clientID: settings.auth.google.clientId,
            clientSecret: settings.auth.google.clientSecret,
            callbackURL: settings.auth.google.callbackUrl
        }, this.initOAuth2Strategy);
    }
    AuthService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ISettings'))
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=authService.js.map
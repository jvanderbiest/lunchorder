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
var inversify_express_utils_1 = require('inversify-express-utils');
var inversify_1 = require('inversify');
var passport = require('passport');
var Constants = require('../config/constants');
var AuthController = (function () {
    function AuthController(settings) {
        this.settings = settings;
    }
    AuthController.prototype.googleAuth = function () { };
    AuthController.prototype.googleAuthCallback = function (req, res) {
        res.redirect(this.settings.frontend.url + "/access_token=" + req.user.access_token);
    };
    __decorate([
        inversify_express_utils_1.Get('/google', passport.authenticate('google', { session: false, scope: ['https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'], accessType: 'offline', approvalPrompt: 'force' }))
    ], AuthController.prototype, "googleAuth", null);
    __decorate([
        inversify_express_utils_1.Get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: Constants.environment.frontEnd.urls.login }))
    ], AuthController.prototype, "googleAuthCallback", null);
    AuthController = __decorate([
        inversify_express_utils_1.Controller('/auth'),
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ISettings'))
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map
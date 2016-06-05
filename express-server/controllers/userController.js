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
var UserController = (function () {
    function UserController(settings) {
        this.settings = settings;
    }
    UserController.prototype.getProfile = function (req, res) {
        res.send('authenticated!');
    };
    __decorate([
        inversify_express_utils_1.Get('/profile', passport.authenticate('bearer', { session: false }))
    ], UserController.prototype, "getProfile", null);
    UserController = __decorate([
        inversify_express_utils_1.Controller('/user'),
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ISettings'))
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map
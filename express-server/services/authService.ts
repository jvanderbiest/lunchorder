import { Controller, Get } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';

import * as Settings from '../config/environment.dev'
import { OAuth2Strategy } from 'passport-google-oauth';
import { User } from '../domain/user/user'
import * as BearerStrategy from 'passport-http-bearer';
import { CacheService } from '../services/cacheService'

interface IAuthService {
    BearerStrategy: BearerStrategy.Strategy;
    GoogleStrategy: OAuth2Strategy;
}

export class AuthService implements IAuthService {
    constructor() {
        this.cacheService = new CacheService();
        this.BearerStrategy = new BearerStrategy.Strategy(this.initBearerStrategy);
        this.GoogleStrategy = new OAuth2Strategy({
            clientID: Settings.environment.authSettings.google.clientId,
            clientSecret: Settings.environment.authSettings.google.clientSecret,
            callbackURL: Settings.environment.authSettings.google.callbackUrl
        }, this.initOAuth2Strategy);
    }

    private cacheService: CacheService;
    private user: User;
    public BearerStrategy: BearerStrategy.Strategy;
    public GoogleStrategy: OAuth2Strategy;

    private initBearerStrategy = (token: string, done: any) => {
        console.log("BearerStrategy called with token: " + token);

        console.log("user: " + this.user);
        if (!this.user) { return done(null, false); }

        if (this.user) {
            if (this.user.id == token) {
                return done(null, this.user);
            }
            else {
                return done(null, false);
            }
        }
        // 500 error is by done("ERRORHERE");
    }

    private initOAuth2Strategy = (accessToken: string, refreshToken: string, profile: any, done: any) => {
        console.log("Google has authentiated...");
        // Extract the minimal profile information we need from the profile object
        // provided by Google

        var imageUrl = '';
        if (profile.photos && profile.photos.length) {
            imageUrl = profile.photos[0].value;
        }
        // this.User = new server.domain.user.User(new server.domain.user.UserProfile(profile.id, profile.displayName, imageUrl));
        console.log(`User logged in: ${profile.displayName}`);

        // todo add constant
        this.cacheService.set(accessToken, profile, 360000, () => { });
        this.user = new User(accessToken, "bla");
        console.log("saved user: " + this.user);
        profile.access_token = accessToken;
        return done(null, profile);
        //this.User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //  return done(err, user);
        //});
    };


}
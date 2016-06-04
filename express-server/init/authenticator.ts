import * as Settings from '../config/environment.dev'
import { OAuth2Strategy } from 'passport-google-oauth';
import { User } from '../domain/user/user'
import * as BeareStrategy from 'passport-http-bearer';
import { CacheService } from '../services/cacheService'

interface IAuthenticator {
  GoogleStrategy: OAuth2Strategy;
  BearerStrategy: BeareStrategy.Strategy;
}

class Authenticator implements IAuthenticator {
  cacheService: CacheService;
  User: User;
  BearerStrategy: BeareStrategy.Strategy
  GoogleStrategy: OAuth2Strategy;

  constructor() {
    console.log("Authenticator constructor");
    // todo inject as singleton.
    this.cacheService = new CacheService()

    this.BearerStrategy = new BeareStrategy.Strategy(
      (token, done) => {
        console.log("BearerStrategy called with token: " + token);

        console.log("user: " + this.User);
        if (!this.User) { return done(null, false); }
        
        if (this.User) {
          if (this.User.id == token) {
            return done(null, this.User);
          }
          else {
            return done(null, false);
          }
        }
        // 500 error is by done("ERRORHERE");
        
        // this.cacheService.get(token, (err: any, value: any) => {
        //   console.log("error: " + err);
        //   console.log("value " + value);


        // if (!err) {
        //    if (value == undefined) {
        //     // key not found -- unauthorized
        //     return done("Unauthorized");
        //   } else {
        //      console.log("token from cache:" + value);
        //         done(null, value);
        //     console.log(value);
        //     //{ my: "Special", variable: 42 } 
        //     // ... do something ... 
        //   }
        // }
        // else {
        //   return done(err);
        // }
        // User.findOne({ token: token }, function (err, user) {
        // if (err) { return done(err); }
        // if (!user) { return done(null, false); }
        // return done(null, user, { scope: 'all' });
        // });

        // });
      });

    this.GoogleStrategy = new OAuth2Strategy({
      clientID: Settings.environment.authSettings.google.clientId,
      clientSecret: Settings.environment.authSettings.google.clientSecret,
      callbackURL: Settings.environment.authSettings.google.callbackUrl
    }, (accessToken, refreshToken, profile, done) => {

      console.log("Google has authentiated...");
      // Extract the minimal profile information we need from the profile object
      // provided by Google
      var profileObj = this.extractProfile(profile);

      // todo add constant
      this.cacheService.set(accessToken, profileObj, 360000, () => { });
      this.User = new User(accessToken, "bla");
      console.log("saved user: " + this.User);
      profileObj.access_token = accessToken;
      return done(null, profileObj);
      //this.User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //  return done(err, user);
      //});
    });
  }


  extractProfile(profile: any): any {

    console.log(profile.photos);
    var imageUrl = '';
    if (profile.photos && profile.photos.length) {
      imageUrl = profile.photos[0].value;
    }
    // this.User = new server.domain.user.User(new server.domain.user.UserProfile(profile.id, profile.displayName, imageUrl));
    console.log(`User logged in: ${profile.displayName}`);
    return profile;
  }
}
export {Authenticator }
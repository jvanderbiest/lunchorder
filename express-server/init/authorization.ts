import * as Settings from '../config/environment.dev'
import {OAuth2Strategy} from 'passport-google-oauth';

class Authorization {

  constructor() {

  }

  User: server.domain.user.IUser;

  public GoogleStrategy: OAuth2Strategy = new OAuth2Strategy({
    clientID: Settings.environment.authSettings.google.clientId,
    clientSecret: Settings.environment.authSettings.google.clientSecret,
    callbackURL: Settings.environment.authSettings.google.callbackUrl
  }, (accessToken, refreshToken, profile, done) => {
    console.log("Google has authentiated...")
    // Extract the minimal profile information we need from the profile object
    // provided by Google
    done(null, this.extractProfile(profile));
    //this.User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //  return done(err, user);
    //});
  });

  extractProfile(profile) {
    console.log("Extracting profile2...")
    var imageUrl = '';
    if (profile.photos && profile.photos.length) {
      imageUrl = profile.photos[0].value;
    }
    // this.User = new server.domain.user.User(new server.domain.user.UserProfile(profile.id, profile.displayName, imageUrl));
    console.log(`User logged in: ${this.User.profile.displayName}`);
  }
}
export {Authorization }
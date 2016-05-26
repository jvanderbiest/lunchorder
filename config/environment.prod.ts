import * as settings from './environment';

export const environment : settings.IEnvironment = {
  production: true,
  authSettings: {
    google: {
    clientId: "",
    clientSecret: "",
    callbackUrl: ""
    }
  }
};
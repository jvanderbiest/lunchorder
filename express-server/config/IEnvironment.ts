module server.config {
  export interface IEnvironment {
    production: boolean;
    authSettings: IOAuthSettings;
  }

  export interface IOAuthSettings {
    google: IGoogleSettings;
  }

  export interface IGoogleSettings {
    clientId: string;
    clientSecret: string;
    callbackUrl: string;
  }
}
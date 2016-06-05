export interface ISettings {
  production: boolean;
  auth: IAuthSettings;
  frontend: IFrontendSettings;
}

export interface IAuthSettings {
  google: IGoogleSettings;
}

export interface IGoogleSettings {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
}

export interface IFrontendSettings {
  url: string;
}

export class AuthSettings implements IAuthSettings {
  constructor(public google: IGoogleSettings) { }
}

export class GoogleSettings implements IGoogleSettings {
  constructor(public clientId : string,
  public clientSecret: string,
  public callbackUrl: string) { }
}

export class FrontendSettings implements IFrontendSettings {
  constructor(public url : string) { }
}
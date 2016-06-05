import * as settings from './settings';

export class ProductionSettings implements settings.ISettings {
  production: boolean;
  auth: settings.IAuthSettings;
  frontend: settings.IFrontendSettings;
  
  constructor() {
    this.production = true;
    var authSettings : settings.IAuthSettings = new settings.AuthSettings(new settings.GoogleSettings(
      "",
      "",
      ""));
    var frontendSettings : settings.IFrontendSettings = new settings.FrontendSettings("")    
    this.auth = authSettings;
    this.frontend = frontendSettings;
  }
}
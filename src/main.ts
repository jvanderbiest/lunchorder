import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { LunchCatalogAppComponent, environment } from './app/';
import { LunchMenuComponent } from './app/lunch-menu';

if (environment.production) {
  enableProdMode();
}

bootstrap(LunchCatalogAppComponent);

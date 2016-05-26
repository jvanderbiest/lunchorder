import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LunchCatalogAppComponent } from '../app/lunch-catalog.component';

beforeEachProviders(() => [LunchCatalogAppComponent]);

describe('App: LunchCatalog', () => {
  it('should create the app',
      inject([LunchCatalogAppComponent], (app: LunchCatalogAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'lunch-catalog works!\'',
      inject([LunchCatalogAppComponent], (app: LunchCatalogAppComponent) => {
    expect(app.title).toEqual('lunch-catalog works!');
  }));
});

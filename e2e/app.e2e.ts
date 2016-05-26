import { LunchCatalogPage } from './app.po';

describe('lunch-catalog App', function() {
  let page: LunchCatalogPage;

  beforeEach(() => {
    page = new LunchCatalogPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lunch-catalog works!');
  });
});

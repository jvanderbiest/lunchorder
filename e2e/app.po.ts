export class LunchCatalogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lunch-catalog-app h1')).getText();
  }
}

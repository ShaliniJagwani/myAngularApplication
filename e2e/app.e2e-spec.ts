import { ShoppingApplicationPage } from './app.po';

describe('shopping-application App', function() {
  let page: ShoppingApplicationPage;

  beforeEach(() => {
    page = new ShoppingApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { VisaPage } from './app.po';

describe('visa App', () => {
  let page: VisaPage;

  beforeEach(() => {
    page = new VisaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

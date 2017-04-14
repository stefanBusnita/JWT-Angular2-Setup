import { JWTANGULAR2SETUPPage } from './app.po';

describe('jwt-angular2-setup App', function() {
  let page: JWTANGULAR2SETUPPage;

  beforeEach(() => {
    page = new JWTANGULAR2SETUPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

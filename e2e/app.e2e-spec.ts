import { Ng2Auth0DemoAppPage } from './app.po';

describe('ng2-auth0-demo-app App', function() {
  let page: Ng2Auth0DemoAppPage;

  beforeEach(() => {
    page = new Ng2Auth0DemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

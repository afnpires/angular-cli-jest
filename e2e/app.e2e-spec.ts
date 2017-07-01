import { AngularCliJestPage } from './app.po';

describe('angular-cli-jest App', () => {
  let page: AngularCliJestPage;

  beforeEach(() => {
    page = new AngularCliJestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

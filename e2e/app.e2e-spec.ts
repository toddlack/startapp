import { StartappPage } from './app.po';

describe('startapp App', () => {
  let page: StartappPage;

  beforeEach(() => {
    page = new StartappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

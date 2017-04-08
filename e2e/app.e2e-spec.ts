import { A93TonderPage } from './app.po';

describe('a93-tonder App', () => {
  let page: A93TonderPage;

  beforeEach(() => {
    page = new A93TonderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

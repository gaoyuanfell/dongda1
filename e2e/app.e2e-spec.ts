import { Dongda1Page } from './app.po';

describe('dongda1 App', () => {
  let page: Dongda1Page;

  beforeEach(() => {
    page = new Dongda1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

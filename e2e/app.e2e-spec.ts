import { Ng2BalloonMsgPage } from './app.po';

describe('ng2-balloon-msg App', function() {
  let page: Ng2BalloonMsgPage;

  beforeEach(() => {
    page = new Ng2BalloonMsgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

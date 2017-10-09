import { StudentsCrudExpressMongoPage } from './app.po';

describe('students-crud-express-mongo App', function() {
  let page: StudentsCrudExpressMongoPage;

  beforeEach(() => {
    page = new StudentsCrudExpressMongoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

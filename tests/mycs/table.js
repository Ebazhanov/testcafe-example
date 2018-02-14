import config from '../../config';
import HomePage from '../../page-objects/mycs/home-page';

const homePage = new HomePage();

fixture `Table`
    .page `${config.tableUrl}`;

test('Navigate to table page', async t => {
    await t
        .click(homePage.searchField)
});

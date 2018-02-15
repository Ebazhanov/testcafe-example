import config from '../../config';
import TablePage from '../../page-objects/mycs/home-page';

const tablePage = new TablePage();

fixture `Table`
    .page `${config.tableUrl}/tisch/Fir7tqo7e?tab=farben`;

test('Navigate to table page', async t => {
    await t
        .click(tablePage.thirdButton)
});

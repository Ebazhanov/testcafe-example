import config from '../../config';
import MainPage from '../../page-objects/check24/main-page';

const mainPage = new MainPage();

fixture `Check 24 search`
    .page `${config.check24Url}`;

test('Search for ...', async t => {
    await t
        .typeText(mainPage.searchField, 'Credit')
        .click(mainPage.firstVideoInSearchResult)
});
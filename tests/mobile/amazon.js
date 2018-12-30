import config from '../../config';
import MainPage from '../../page-objects/mobile/main-page';

const mainPage = new MainPage();

fixture`Amazon search`
    .page`${config.amazonUrl}`;

test('Search for iPhone', async t => {
    await t
        .typeText(mainPage.searchField, 'iPhone X')
        .pressKey('enter')
        .click(mainPage.searchField)
        .click(mainPage.clearField)
        .typeText(mainPage.searchField, 'Samsung S9')
        .pressKey('enter')
        .click(mainPage.searchField)
        .click(mainPage.clearField)
        .typeText(mainPage.searchField, 'Nike')
        .pressKey('enter')
        .click(mainPage.searchField)
        .click(mainPage.clearField)
});

import config from '../../config';
import MainPage from '../../page-objects/tc-forum/main-page';

const mainPage = new MainPage();

fixture`Test cafe forum`
    .page`${config.testCafeUrl}`;

test('Search for ...', async t => {
    await t
        .click(mainPage.searchIcon)
        .typeText(mainPage.searchField, 'Headless')
        .pressKey('enter')
        .click(mainPage.searchIcon)
        .typeText(mainPage.searchField, 'Device Emulation')
        .pressKey('enter')
});

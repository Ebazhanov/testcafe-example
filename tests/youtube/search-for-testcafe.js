import config from '../../config';
import HomePage from '../../page-objects/youtube/home-page';

const homePage = new HomePage();

fixture `Youtube`
    .page `${config.youtubeUrl}`;

test('Search for test cafe video', async t => {
    await t
        .typeText(homePage.searchField, 'test cafe')
        .click(homePage.searchButton)
        .click(homePage.firstVideoInSearchResult);
});
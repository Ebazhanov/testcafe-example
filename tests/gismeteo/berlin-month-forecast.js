import config from '../../config';
import HomePage from '../../page-objects/gismeteo/home-page';

const homePage = new HomePage();

fixture `Month forecast`
    .page `${config.gismeteoUrl}`;

test('Weather in Berlin for a month', async t => {
    await t
        .typeText(homePage.searchField, 'Berlin')
        .click(homePage.firstVideoInSearchResult)
        .click(homePage.monthForecastTab)
        .expect(homePage.monthTabText.innerText).eql('Weather in Berlin for a month');
});
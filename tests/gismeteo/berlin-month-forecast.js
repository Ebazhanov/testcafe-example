import config from '../../config';
import homePage from '../../page-objects/home-page';

const home_page = new homePage();

fixture `Month forecast`
    .page `${config.baseUrl}`;

test('Weather in Berlin for a month', async t => {
    await t
        .typeText(home_page.searchField, 'Berlin')
        .click(home_page.firstCityIntoSearchResult)
        .click(home_page.monthForecastTab)
        .expect(home_page.monthTabText.innerText).eql('Weather in Berlin for a month');
});
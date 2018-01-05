import config from '../../config';
import HomePage from '../../page-objects/twitter/home-page';

const homePage = new HomePage();

fixture `Twitter`
    .page `${config.twitterUrl}`;

test('Navigate to tweet and photo page', async t => {
    await t
        .click(homePage.tweetAndPhotoButton)
        .click(homePage.closePopupButton);
});
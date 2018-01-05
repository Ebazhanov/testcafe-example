import {Selector} from 'testcafe';

export default class HomePage {
    constructor() {
        this.tweetAndPhotoButton = Selector('div.companion-tweet.active > p.username > a');
        this.closePopupButton = Selector('#permalink-overlay > div.PermalinkProfile-dismiss.modal-close-fixed > span');
    }
}
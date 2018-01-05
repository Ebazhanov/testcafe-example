import {Selector} from 'testcafe';

export default class HomePage {
    constructor() {
        this.searchField = Selector('#c24-search-header');
        this.firstVideoInSearchResult = Selector('#c24-search-form > fieldset > div.hits-suggest-wrapper > div > ul').withText('credit');
    }
}
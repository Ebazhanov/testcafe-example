import {Selector} from 'testcafe';

export default class HomePage {
    constructor() {
        this.searchField = Selector('#search');
        this.searchButton = Selector('#search-icon-legacy > yt-icon');
        this.firstVideoInSearchResult = Selector('#contents > ytd-playlist-renderer');
    }
}
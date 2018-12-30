import {Selector} from 'testcafe';

export default class HomePage {
    constructor() {
        this.searchIcon = Selector('#search-icon');
        this.searchField = Selector('#search');
    }
}
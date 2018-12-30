import {Selector} from 'testcafe';

export default class HomePage {
    constructor() {
        this.searchField = Selector('.nav-input', {timeout: 0});
        this.clearField = Selector('[class*="nav-search-clear"]', {timeout: 0});
    }
}
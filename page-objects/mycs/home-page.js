import {Selector} from 'testcafe';

export default class HomePage {
    constructor() {
        this.searchField = Selector('#ya');
    }
}

import {Selector} from 'testcafe';

export default class HomePage {
    constructor() {
        this.thirdButton = Selector('[class*="DropdownButton__options"] > span:nth-child(3) button')
    }
}

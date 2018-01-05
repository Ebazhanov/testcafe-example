import {Selector} from 'testcafe';

export default class HomePage {
    constructor() {
        this.searchField = Selector('#ya');
        this.firstVideoInSearchResult = Selector('#jSuggestContainer ul li').withText('Berlin');
        this.monthForecastTab = Selector('#weather-daily a:nth-child(7)');
        this.monthTabText = Selector('#weather-month > div.fcontent > div.section > h1');
    }
}
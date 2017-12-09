import {Selector} from 'testcafe';

export default class HomePage {
    constructor() {
        this.searchField = Selector('#ya');
        this.firstCityIntoSearchResult = Selector('#jSuggestContainer > ul > li:nth-child(1)');
        this.monthForecastTab = Selector('#weather-daily a:nth-child(7)');
        this.monthTabText = Selector('#weather-month > div.fcontent > div.section > h1');
    }
}
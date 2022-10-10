const { client } = require('nightwatch-api');
const { Given, Then } = require('cucumber');

Given(/^I open Hacker News's home page$/, () => {
    return client
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('body', 1000);
});
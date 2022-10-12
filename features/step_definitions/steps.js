const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^I open Hacker News's home page$/, () => {
    return client
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('body', 1000);
});

When(/An Excellian is signed in with JumpCloud/, () => {
    return client
        .url('/')
        .waitForElementVisible('h1', 1000)
});
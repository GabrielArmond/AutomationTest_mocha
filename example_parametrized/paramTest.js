const { Builder, By, Key } = require('selenium-webdriver')
var TestCapabilities = require('../capabilities')
const { it } = require('mocha')
var should = require('chai').should()

const chrome = require('selenium-webdriver/chrome')
require('chromedriver')

//Fora de uso -- out of use

//describe block
describe('add another a todo tests', function () {
  var driver

  var browsers = [
    { browser: 'Chrome', bVersion: '95.0', os: 'Windows 10' },
    { browser: 'Firefox', bVersion: '93.0', os: 'Windows 10' }
  ]

  browsers.forEach(({ browser, bVersion, os }) => {
    //it block
    it(`successfully adds a todo for browser ${browser}, ${bVersion}, ${os}`, async () => {
      browsers.browser = browser
      browsers.bVersion = bVersion
      browsers.os = os

      driver = new Builder().forBrowser('chrome').forBrowser('firefox').build()

      //naviagete to our application
      await driver.get('https://lambdatest.github.io/sample-todo-app/')

      //add a search
      await driver
        .findElement(By.id('sampletodotext'))
        .sendKeys('Learn Selenium', Key.RETURN)

      //assert
      let todoText = await driver
        .findElement(By.xpath('//li[last()]'))
        .getText()
        .then(function (value) {
          return value
        })

      //assert using chai should
      todoText.should.equal('Learn Selenium')

      await driver.quit()
    })
  })
})

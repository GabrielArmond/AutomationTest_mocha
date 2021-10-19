const { Builder, By, Key } = require('selenium-webdriver')
const { it } = require('mocha')
var should = require('chai').should()

require('selenium-webdriver/chrome')
require('chromedriver')

//describe block
describe('add another a todo tests', function () {
  var driver

  beforeEach(() => {
    driver = new Builder().forBrowser('chrome').build()
  })

  afterEach(async () => {
    await driver.quit()
  })

  //it block
  it('successfully adds another todo to application', async () => {
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
  })

  it('Adding a new test for reporting', async () => {
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
    todoText.should.equal('Learn nothing')
  })
})

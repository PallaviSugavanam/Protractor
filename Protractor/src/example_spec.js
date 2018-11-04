describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');
browser.sleep(5000);
    element(by.model('yourName')).sendKeys('Julie');
    browser.sleep(5000);

    var greeting = element(by.binding('yourName'));
    browser.sleep(5000);

    expect(greeting.getText()).toEqual('Hello Julie!');
  });
});
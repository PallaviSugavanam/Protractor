describe('Calculator Function Test', function() {
  it('Addition', function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
browser.sleep(5000);
    element(by.model('first')).sendKeys(5);
    element(by.model('second')).sendKeys(4);
element(by.buttonText("Go!")).click();

		
    browser.sleep(5000);

    var actual = element(by.binding("latest"));
    browser.sleep(5000);

    expect(actual.getText()).toEqual('9');
  });
});
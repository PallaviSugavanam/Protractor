describe('Salesforce Function Test', function() {
  it('Addition', function() {
	  browser.ignoreSynchronization=true;
    browser.get("https://login.salesforce.com/");
    element(by.id('username')).sendKeys("aaa@yahoo.com");


  });
});
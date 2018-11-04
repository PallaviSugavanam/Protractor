var data=require("F:/Pallavi/Protractor/Protractor/data.json");
describe('Calculator Function Test', function() {
	  it('Addition', function() {
	    browser.get(data.url);
	browser.sleep(5000);
	    element(by.model('first')).sendKeys(data.AValue);
	    element(by.model('second')).sendKeys(data.BValue);
	element(by.buttonText("Go!")).click();

			
	    browser.sleep(5000);

	    var actual = element(by.binding("latest"));
	    browser.sleep(5000);

	    expect(actual.getText()).toEqual('50');
	  });
	});
	

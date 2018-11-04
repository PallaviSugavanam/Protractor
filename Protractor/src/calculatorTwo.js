describe('Calculator Function Test', function() {
	beforeEach(function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
	});
	afterEach(function(){
		console.log("end of test");
	});
	
  it('Multi[plication', function() {
  
    element(by.model('first')).sendKeys(5);
    element.all(by.options("value for (key, value) in operators")).then(function(data){
  data[3].click();
    });
    element(by.model('second')).sendKeys(4);
element(by.buttonText("Go!")).click();

		
    browser.sleep(5000);

    var actual = element(by.binding("latest"));
    browser.sleep(5000);

    expect(actual.getText()).toEqual('20');
    
     });
  
 
  it('Addition', function() {
	    element(by.model('first')).sendKeys(5);
	    element.all(by.options("value for (key, value) in operators")).then(function(data){
	  data[0].click();
	    });
	    element(by.model('second')).sendKeys(4);
	element(by.buttonText("Go!")).click();

			
	    browser.sleep(5000);

	    var actual = element(by.binding("latest"));
	    browser.sleep(5000);

	    expect(actual.getText()).toEqual('9');
	    
	     });
  
  it('Subtraction', function() {
	
	    element(by.model('first')).sendKeys(5);
	    element.all(by.options("value for (key, value) in operators")).then(function(data){
	  data[4].click();
	    });
	    element(by.model('second')).sendKeys(4);
	element(by.buttonText("Go!")).click();

			
	    browser.sleep(5000);

	    var actual = element(by.binding("latest"));
	    browser.sleep(5000);

	    expect(actual.getText()).toEqual('1');
	    
	     });
  
  it('Modular', function() {
	   
	    element(by.model('first')).sendKeys(5);
	    element.all(by.options("value for (key, value) in operators")).then(function(data){
	  data[2].click();
	    });
	    element(by.model('second')).sendKeys(4);
	element(by.buttonText("Go!")).click();

			
	    browser.sleep(5000);

	    var actual = element(by.binding("latest"));
	    browser.sleep(5000);

	    expect(actual.getText()).toEqual('1');
	    
	     });
});
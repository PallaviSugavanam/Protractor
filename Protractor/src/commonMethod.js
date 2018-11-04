var add=function(a,b,op){
 element(by.model('first')).sendKeys(a);
    element.all(by.options("value for (key, value) in operators")).then(function(data){
  data[op].click();
    });
    element(by.model('second')).sendKeys(b);
element(by.buttonText("Go!")).click();

		
    browser.sleep(5000);
    }
    
    describe('Calculator Function Test', function() {
  it('Basic Calculation', function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
browser.sleep(5000);
add(5,4,0);
add(5,4,1);
add(5,4,2);
});
});
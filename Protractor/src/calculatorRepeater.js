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
	beforeEach(function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
	});
	afterEach(function(){
		console.log("end of test");
	});
	
  it('Basic Calculation', function() {
	  
  	//	browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

	  add(50,50,2);
	  element.all(by.repeater("result in memory")).then(function(data){
		  for (var i = 0; i < data.length; i++) {
			  data[i].getText().then(function(test){
				console.log(test);  
			  });
			
		}
	  });
	  
	  element.all(by.repeater("result in memory")).column("result.value").then(function(data1){

  });
	  
  });
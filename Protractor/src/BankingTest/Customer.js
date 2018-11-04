//var data=require('F:\Pallavi\Protractor\Protractor\Multiformdata.json')
var Customer=function(){
	var CustomerList=element.all(by.repeater('cust in Customers'));
	var CustomerLogin1=element(by.buttonText('Login'));

	
	this.SelectCustomer=function(index){
		//CustomerList.click();
		CustomerList.get(index).click();
		return this;
	}
	
	this.CustomerLogin1=function(){
		CustomerLogin1.click();
		return require('F:/Pallavi/Protractor/Protractor/src/BankingTest/HarryPotterPage.js');
	}
	
}
module.exports=new Customer();
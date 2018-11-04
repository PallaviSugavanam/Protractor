var data=require('F:/Pallavi/Protractor/Protractor/src/Utility/Multiformdata.json')
var login=require('F:/Pallavi/Protractor/Protractor/src/BankingTest/loginPage.js')
describe('Banking Test', function() {
	 it('LoginPage', function() {
		 browser.sleep();
		 browser.get(data.url);	
		 browser.sleep(10000);
		// var Customer=login.CustomerLoginfn();
		 var customerText=login.CustomerLoginText();
	console.log(customerText)
		//var customerT=login.CustomerLogin().getText();
		 expect(customerText).toContain("Function");
		 
	 });
	 
	 
	 it('verifyCurrencyType', function() {
		 browser.get(data.url);	
		 browser.sleep(4000);
		 var Customer=login.CustomerLoginfn();
		 browser.sleep(4000);

	Customer.SelectCustomer(1);
	var HarryPotterPage=Customer.CustomerLogin1();
		// expect(customerText).toContain("Function");
		 
	 }); 
	 
	 
	 it('initialTransaction', function() {
		 browser.get(data.url);	
		 browser.sleep(4000);
		 var Customer=login.CustomerLoginfn();
		 browser.sleep(4000);

	Customer.SelectCustomer(1);
	var HarryPotterPage=Customer.CustomerLogin1();
	var Transaction=HarryPotterPage.Transaction();
	 browser.sleep(4000);
var size=Transaction.TransactionDetailsSize();
//console.log(size);
		 expect(size).toBe('0');
		 
	 }); 
	 
	 it('DepositMoney', function() {
		 browser.get(data.url);	
		 browser.sleep(4000);
		 var Customer=login.CustomerLoginfn();
		 browser.sleep(4000);

	Customer.SelectCustomer(1);
	var HarryPotterPage=Customer.CustomerLogin1();
	HarryPotterPage.AccounNumber(2);
	HarryPotterPage.Deposit();
	HarryPotterPage.enterDepositAmount();
	
	var DepositPage=HarryPotterPage.DepositTab();
	 browser.sleep(4000);
//var size=Transaction.TransactionDetailsSize();
//console.log(size);
		// expect(size).toBe('0');
		 
	 }); 
	 it('TransationAfterDeposit', function() {
		 browser.get(data.url);	
		 browser.sleep(4000);
		 var Customer=login.CustomerLoginfn();
		 browser.sleep(4000);

	Customer.SelectCustomer(1);
	var HarryPotterPage=Customer.CustomerLogin1();
	HarryPotterPage.AccounNumber(2);
	HarryPotterPage.Deposit();
	HarryPotterPage.enterDepositAmount();	
	var DepositPage=HarryPotterPage.DepositTab();
	 browser.sleep(4000);
		var Transaction=HarryPotterPage.Transaction();
		 browser.sleep(4000);
//var size=Transaction.TransactionDetailsSize();
//console.log(size);
		// expect(size).toBe('0');
		 
	 });
	 
	 it('withDrawError', function() {
		 browser.get(data.url);	
		 browser.sleep(4000);
		 var Customer=login.CustomerLoginfn();
		 browser.sleep(4000);

	Customer.SelectCustomer(1);
	var HarryPotterPage=Customer.CustomerLogin1();
	HarryPotterPage.AccounNumber(2);
	HarryPotterPage.WithDrawal();
	HarryPotterPage.enterWithDrawalAmount();
	HarryPotterPage.WithDrawalTab();
	 browser.sleep(4000);
	 var err=HarryPotterPage.WithDrawalErrorMsg
	 console.log(err);
expect(err).toEqual("Transaction Failed. You can not withdraw amount more than the balance.");
		 
	 });
	 
	 it('withDrawSuccess', function() {
		 browser.get(data.url);	
		 browser.sleep(4000);
		 var Customer=login.CustomerLoginfn();
		 browser.sleep(4000);

	Customer.SelectCustomer(1);
	var HarryPotterPage=Customer.CustomerLogin1();
	HarryPotterPage.AccounNumber(2);
	HarryPotterPage.WithDrawal();
	HarryPotterPage.enterWithDrawalAmountSuccess();
	HarryPotterPage.WithDrawalTab();
	 browser.sleep(4000);
	
	 var err=HarryPotterPage.WithDrawalErrorMsg
	 console.log(err);
expect(err).toEqual('Transaction Succesful');
//expect(err).toBe('Transaction Failed. You can not withdraw amount more than the balance.');
		 
	 });
	 });

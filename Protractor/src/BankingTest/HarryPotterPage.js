var data=require('F:/Pallavi/Protractor/Protractor/src/Utility/Multiformdata.json')
var HarryPotterPage=function(){
	//var AccountNumber=element.all(by.model('accountNo'));
	//var Currency= element(by.binding("latest"));
	var Transaction=element(by.partialButtonText('Transactions'));
	var Deposit=element(by.partialButtonText('Deposit'));
			
	var WithDrawal=element(by.buttonText('Withdrawl'));
	
	var DepositAmount=element(by.model('amount'));
	var WithDrawAmount=element(by.model('amount'));	
	var DepositTab=element(by.className('btn btn-default'));
	var WithDrawalErrorMsg=element(by.className('error ng-binding'));
	//var WithDrawalTab=element(by.className('form-control ng-pristine ng-invalid ng-invalid-required ng-touched'));
	var WithDrawalTab=element(by.className('btn btn-default'));
	var AccountNumber=element.all(by.options('account for account in Accounts'));
			
	this.currency=function(){
		element(by.binding("2000")).getText();
		console.log(currency);
		return this;
	}
	//var CustomerLogin1=element(by.buttonText('Login'));
	this.WithDrawalErrorMsg=function(){
		WithDrawalErrorMsg.getText();
		return this;
	}
	
	this.AccounNumber=function(index){
		AccountNumber.get(index).click();
		return this;
	}
	
	this.Transaction=function(){
		Transaction.click();
		return require('F:/Pallavi/Protractor/Protractor/src/BankingTest/Transaction.js');
			}
	
	this.Deposit=function(){
		Deposit.click();
		return this;
			}
	
	this.WithDrawal=function(){
		WithDrawal.click();
		return this;
			}
	
	this.DepositTab=function(){
		DepositTab.click();
		return require('F:/Pallavi/Protractor/Protractor/src/BankingTest/DepositPage.js');
	}
	
	this.WithDrawalTab=function(){
		WithDrawalTab.click();
		return require('F:/Pallavi/Protractor/Protractor/src/BankingTest/WithDrawalPage.js');
			}
	
	this.enterDepositAmount=function(){
		DepositAmount.sendKeys(data.DepositValue);
		return this;
	}
	this.enterWithDrawalAmountSuccess=function(){
		WithDrawAmount.sendKeys(data.WithDrawalValueSuccess);
		return this;
	}
	
	this.enterWithDrawalAmount=function(){
		WithDrawAmount.sendKeys(data.WithDrawalValue);
		return this;
	}
	
}
module.exports=new HarryPotterPage();
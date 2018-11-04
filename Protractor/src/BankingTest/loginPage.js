//var data=require('F:/Pallavi/Protractor/Protractor/src/Utility/Multiformdata.json')
var loginPage=function(){
	
	
	var CustomerLogin=element(by.buttonText('Customer Login'));
	//var ManagerLogin=element(by.partialButtonText('Manager'));

    this.CustomerLoginfn=function(){   	
		CustomerLogin.click();
		return require('F:/Pallavi/Protractor/Protractor/src/BankingTest/Customer.js');	
				
	}
    
    this.CustomerLoginText=function(){  

		CustomerLogin.getText();
		//console.log(CustomerLogin.getText());
		return this;
				
	}
    /*
	    this.CustomerLogin=function(){		
		CustomerLogin.click();
		return require('F:/Pallavi/Protractor/Protractor/src/BankingTest/Customer.js');
	}
	*/
	  /*  this.MangerLoginfn=function(){		
		ManagerLogin.click();
		return require('F:/Pallavi/Protractor/Protractor/src/BankingTest/Manager.js');
		
	}*/
}
module.exports=new loginPage();

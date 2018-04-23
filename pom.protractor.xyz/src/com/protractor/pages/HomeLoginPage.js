var HomeLogin=function(){

	var managerLogin=element(by.partialButtonText('Bank Manager Login'));
	var customerLogin=element(by.partialButtonText('Customer Login'));


	this.clickManagerLogin=function(){
		managerLogin.click();
		return require('./ManagerPage.js');
	}

	this.clickcustomerLogin=function(){
		customerLogin.click();
		return require('./CustomerLoginPage.js');
	}

	this.verifyBankButton=function(btnValue){
		expect(managerLogin.getText()).toBe(btnValue);
	}

	this.verifyCustButton=function(btnValue){
		expect(customerLogin.getText()).toBe(btnValue);
	}

}
module.exports=new HomeLogin();
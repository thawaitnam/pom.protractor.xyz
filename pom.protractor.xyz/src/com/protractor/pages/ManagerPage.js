var Manager=function(){

	var addCustomer=element(by.partialButtonText('Add Customer'));
	var openAccount=element(by.partialButtonText('Open Account'));
	var customers=element(by.partialButtonText('Customers'));

	this.clickaddCustomer=function(){
		addCustomer.click();
		return require('./AddCustomerPage.js');
	}


	this.clickOpenAccount=function(){
		openAccount.click();
		return require('./OpenAccountPage.js');
	}

	this.verifyAddCust=function(btnValue){
			expect(addCustomer.getText()).toBe(btnValue);
	}

	this.verifyOpenAccount=function(btnValue){
		expect(openAccount.getText()).toBe(btnValue);
	}

	this.verifyCustomersButton=function(btnValue){
		expect(customers.getText()).toBe(btnValue);

	}

}
module.exports=new Manager();


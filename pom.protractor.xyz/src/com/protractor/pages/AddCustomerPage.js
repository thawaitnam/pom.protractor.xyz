var AddCustomer=function(){

	var openAccount=element(by.partialButtonText('Open Account'));
	var firstName=element(by.model('fName'));
	var lastName=element(by.model('lName'));
	var postCode=element(by.model('postCd'));
	var addCustomer=element(by.className('btn btn-default'));

	this.enterFirstName=function(firstnameValue){
		firstName.sendKeys(firstnameValue);
		return this;
	}

	this.enterLastName=function(lastNameValue){
		lastName.sendKeys(lastNameValue);
		return this;
	}

	this.enterPostCode=function(postCodeValue){
		postCode.sendKeys(postCodeValue);
		return this;
	}

	this.clickaddCustomer=function(){
		addCustomer.click();
	}

	this.clickOpenAccount=function(){
		openAccount.click();
		return require('./OpenAccountPage.js');
	}

	this.verifyAcceptAlert=function(expectedAlertMsg){
		var alert=browser.switchTo().alert()
		var alerttxt=alert.getText();
		expect(alerttxt).toContain(expectedAlertMsg);
		alert.accept();
	}
}
module.exports=new AddCustomer();


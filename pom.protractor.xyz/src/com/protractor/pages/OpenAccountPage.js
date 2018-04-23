var OpenAccount = function() {

	var customers=element(by.partialButtonText('Customers'));
	var custDropDown = element.all(by.repeater('cust in Customers'))
	var currencyDropDown = element(by.model('currency'))
	var process = element(by.partialButtonText('Process'))


	this.clickCustomers=function(){
		customers.click();
		return require('./CustomersPage.js');
	}


	this.selectCusDropDown = function() {
		custDropDown.then(function(dropdown) {
			console.log("Dropdown length is : " + dropdown.length)
			dropdown[dropdown.length - 1].click();
		})

		return this;
	}

	this.selectCurrencyDropDown = function(index) {
		currencyDropDown.click()
		var dd = element.all(by.xpath("//*[@id='currency']//option"))
		dd.get(index).click();
    	return this;
	}

	this.clickProcess = function() {
		process.click();
	}

	this.acceptAlert = function() {
		var alertMsg = browser.switchTo().alert().getText();
		console.log("Alert text message" + alertMsg);
		browser.switchTo().alert().accept();
	}

	this.verifyAcceptAlert=function(expectedAlertMsg){
		var alert=browser.switchTo().alert()
		var alerttxt=alert.getText();
		expect(alerttxt).toContain(expectedAlertMsg);
		alert.accept();
	}

}

module.exports = new OpenAccount();

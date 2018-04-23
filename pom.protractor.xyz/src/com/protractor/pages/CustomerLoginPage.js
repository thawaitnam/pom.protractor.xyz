var CustomerLogin = function() {

	var customers=element(by.partialButtonText('Customers'));
	var custDropDown = element.all(by.repeater('cust in Customer'))
	var loginButton = element(by.partialButtonText('Login'))

	this.clickLoginButton=function(){
		loginButton.click();
		return require('./AccountPage.js');
	}


	this.selectCusDropDown = function(index) {
		custDropDown.then(function(dropdown) {
			console.log("Dropdown length is : " + dropdown.length)
			dropdown[index].click();
		})

		return this;
	}


	this.verifyTitle=function(expectedTitle){
		var title=browser.getTitle();
		expect(title).toBe(expectedTitle)
	}
}

module.exports = new CustomerLogin();

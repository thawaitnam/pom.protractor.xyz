var AccountPage = function() {
	var custDropDown = element.all(by
			.options('account for account in Accounts'))
	var transButton = element(by.partialButtonText('Transactions'))
	var depositTopBtn = element(by
			.xpath("//button[@class='btn btn-lg tab'][2]"))
	var withdrawTopBtn = element(by
			.xpath("//button[@class='btn btn-lg tab'][3]"))
	var withdrawlButton = element(by
			.xpath("//button[@class='btn btn-default']"))
	var logoutBtn = element(by.partialButtonText('Logout'))
	var errorTxt = element(by.className('error ng-binding'))
	var amountTxt = element(by.model('amount'));
	var depositBtn = element(by.xpath("//button[@class='btn btn-default']"))

	this.verifyErrorMessage = function(expectedErrorMsg) {
		expect(errorTxt.getText()).toBe(expectedErrorMsg)
	}

	this.clickTransactionsButton = function() {
		transButton.click();
		return require('./ListTXPage.js');
	}

	this.clickLogoutBtn = function() {
		logoutBtn.click();
		return require('./CustomersPage.js');
	}

	this.clickDepositTopButton = function() {
		depositTopBtn.click();
	}

	this.clickWithdrawlButton = function() {
		withdrawlButton.click();
	}

	this.enterAmount = function(amount) {
		amountTxt.clear();
		amountTxt.sendKeys(amount);
		return this;
	}

	this.clickDepositButton = function() {
		depositBtn.click();
	}

	this.clickWithdrawTopBtn = function() {
		withdrawTopBtn.click();
	}

	this.selectAccDropDown = function(index) {
		custDropDown.then(function(dropdown) {
			console.log("Dropdown length is : " + dropdown.length)
			dropdown[index].click();
		})

		return this;
	}

	this.verifyText = function() {

	}

}

module.exports = new AccountPage();

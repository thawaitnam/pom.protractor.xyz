var Customers=function(){

	var searchCust=element(by.model('searchCustomer'));
	var deleteCust=element(by.partialButtonText('Delete'));

	this.enterCustName=function(custNameValue){
		searchCust.sendKeys(custNameValue);
		return this;
	}


	this.deleteCustomer=function(){
		deleteCust.click();
	}

	this.verifyTitle=function(expectedTitle){
		var title=browser.getTitle();
		expect(title).toBe(expectedTitle)
	}

}
module.exports=new Customers();


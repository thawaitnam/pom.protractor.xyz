var ListTXPage=function()
{

	var backBtn = element(by.partialButtonText('Back'))
	this.clickBackBtn=function(){
		backBtn.click();
		return require('./AccountPage.js');
	}

	this.verifyTransectiontable=function(expectedRowValue)
	{
		element.all(by.repeater('tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end')).then(function(text){
			for(i=0;i<text.length;i++){
				text[i].getText().then(function(data) {
					console.log("My Data *************************"+data);
					expect(data).toContain(expectedRowValue)
				});
			}
		})
	}

}

module.exports = new ListTXPage();
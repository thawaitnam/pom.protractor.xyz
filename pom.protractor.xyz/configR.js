var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
directConnect: true,
//seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
    
    	//internet explorer
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

 specs: ['./src/com/protractor/scripts/TestScript.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 80000
    
  },
 		
//browser.ignoreSynchronization=false;	 

	onPrepare: function() {
	      jasmine.getEnv().addReporter(
	        new Jasmine2HtmlReporter({
	          savePath: 'Reports/screenshots',
	          takeScreenshots: true,
	          takeScreenshotsOnlyOnFailures: true
	        })
	      );
	   }
  
};

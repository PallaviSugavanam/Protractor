// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
 // specs: ['./src/calculatorOne.js','./src/calculatorTwo.js'],


  //specs: ['./src/calculator.js'],


  //specs: ['./src/commonMethod.js'],
 // specs: ['./src/calculatorRepeater.js'],
	  
//  specs: ['./src/NonAngular.js'],
//specs: ['./src/DataDriven/DataDrivenJson.js'],
specs: ['./src/SpecFiles/E2EFile.js'],


//specs: ['./src/example_spec.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 35000
  }
};

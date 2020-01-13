$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addCustomer.feature");
formatter.feature({
  "line": 2,
  "name": "Add Customer",
  "description": "In order to store user information, I want to have the adding customer feature so that I can add customer easily",
  "id": "add-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Add Customer sucessfully",
  "description": "",
  "id": "add-customer;add-customer-sucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as \u003cfullname\u003e successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-sucessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 13,
      "id": "add-customer;add-customer-sucessfully;;1"
    },
    {
      "cells": [
        "thuy",
        "nguyen",
        "55000",
        "thuy nguyen"
      ],
      "line": 14,
      "id": "add-customer;add-customer-sucessfully;;2"
    },
    {
      "cells": [
        "hoa",
        "hong",
        "55000",
        "hoa hong"
      ],
      "line": 15,
      "id": "add-customer;add-customer-sucessfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 25215893400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add Customer sucessfully",
  "description": "",
  "id": "add-customer;add-customer-sucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type first name as thuy, last name as nguyen, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as thuy nguyen successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "thuy",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 40
    },
    {
      "val": "55000",
      "offset": 61
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 12664234700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5110743500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thuy nguyen",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddSuccessfully(String)"
});
formatter.result({
  "duration": 16715827500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 17405618600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add Customer sucessfully",
  "description": "",
  "id": "add-customer;add-customer-sucessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type first name as hoa, last name as hong, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as hoa hong successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hoa",
      "offset": 21
    },
    {
      "val": "hong",
      "offset": 39
    },
    {
      "val": "55000",
      "offset": 58
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 12713792900,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5106837000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hoa hong",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddSuccessfully(String)"
});
formatter.result({
  "duration": 16405862700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as \u003cfullname\u003e unsuccessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 22,
      "id": "add-customer;add-customer-unsucessfully;;1"
    },
    {
      "cells": [
        "thuy",
        "null",
        "55000",
        "thuy"
      ],
      "line": 23,
      "id": "add-customer;add-customer-unsucessfully;;2"
    },
    {
      "cells": [
        "null",
        "nguyen",
        "55000",
        "nguyen"
      ],
      "line": 24,
      "id": "add-customer;add-customer-unsucessfully;;3"
    },
    {
      "cells": [
        "hoan",
        "nguyen",
        "null",
        "nguyen"
      ],
      "line": 25,
      "id": "add-customer;add-customer-unsucessfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 17050808300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as thuy, last name as null, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as thuy unsuccessfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "thuy",
      "offset": 21
    },
    {
      "val": "null",
      "offset": 40
    },
    {
      "val": "55000",
      "offset": 59
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 10508340700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5105926200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thuy",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 11376832100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 17335274900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as null, last name as nguyen, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as nguyen unsuccessfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 40
    },
    {
      "val": "55000",
      "offset": 61
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 10437807700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 219289400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nguyen",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 6402118800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 17065746700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Add Customer unsucessfully",
  "description": "",
  "id": "add-customer;add-customer-unsucessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as hoan, last name as nguyen, post code as null",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as nguyen unsuccessfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hoan",
      "offset": 21
    },
    {
      "val": "nguyen",
      "offset": 40
    },
    {
      "val": "null",
      "offset": 61
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 10447252700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 91398200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nguyen",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 6378111000,
  "status": "passed"
});
formatter.uri("customerDeposit.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer Deposit",
  "description": "",
  "id": "customer-deposit",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Customer Deposit Successfully",
  "description": "",
  "id": "customer-deposit;customer-deposit-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click deposit button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type the deposit as \u003cdeposit\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click deposit submit button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that customer deposit successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "customer-deposit;customer-deposit-successfully;",
  "rows": [
    {
      "cells": [
        "deposit"
      ],
      "line": 16,
      "id": "customer-deposit;customer-deposit-successfully;;1"
    },
    {
      "cells": [
        "2000"
      ],
      "line": 17,
      "id": "customer-deposit;customer-deposit-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login successfully with username as Ron Weasly",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 23186270400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ron Weasly",
      "offset": 38
    }
  ],
  "location": "CommonTest.loginBeforeAction(String)"
});
formatter.result({
  "duration": 18645059600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Customer Deposit Successfully",
  "description": "",
  "id": "customer-deposit;customer-deposit-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click deposit button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type the deposit as 2000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click deposit submit button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that customer deposit successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositTab()"
});
formatter.result({
  "duration": 2090675900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 22
    }
  ],
  "location": "CustomerDepositTest.chooseDepositAmount(String)"
});
formatter.result({
  "duration": 2211056800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositSubmitButton()"
});
formatter.result({
  "duration": 2111226500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.depositSuccesfully()"
});
formatter.result({
  "duration": 2058967200,
  "status": "passed"
});
formatter.uri("customerLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer Login",
  "description": "",
  "id": "customer-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Customer Login Successfully",
  "description": "",
  "id": "customer-login;customer-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I select username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify that user can see login button appears",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify that user as \u003ccustomer\u003e login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "customer-login;customer-login-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "customer"
      ],
      "line": 15,
      "id": "customer-login;customer-login-successfully;;1"
    },
    {
      "cells": [
        "Ron Weasly",
        "Ron Weasly"
      ],
      "line": 16,
      "id": "customer-login;customer-login-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 23044287600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Customer Login Successfully",
  "description": "",
  "id": "customer-login;customer-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I select username as Ron Weasly",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify that user can see login button appears",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify that user as Ron Weasly login successfully",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ron Weasly",
      "offset": 21
    }
  ],
  "location": "CustomerLoginTest.selectUserName(String)"
});
formatter.result({
  "duration": 11389942500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginTest.verifyUsernameSelected()"
});
formatter.result({
  "duration": 3053771600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginTest.clickLogin()"
});
formatter.result({
  "duration": 6161309400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ron Weasly",
      "offset": 22
    }
  ],
  "location": "CustomerLoginTest.verifyLoginSuccessfully(String)"
});
formatter.result({
  "duration": 6181624300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Customer Login Unsuccessfully",
  "description": "",
  "id": "customer-login;customer-login-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I select username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I verify that user can not see login button appears and user login unsuccessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "customer-login;customer-login-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 23,
      "id": "customer-login;customer-login-unsuccessfully;;1"
    },
    {
      "cells": [
        "---Your Name---"
      ],
      "line": 24,
      "id": "customer-login;customer-login-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 17071245500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Customer Login Unsuccessfully",
  "description": "",
  "id": "customer-login;customer-login-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I select username as ---Your Name---",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I verify that user can not see login button appears and user login unsuccessfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "---Your Name---",
      "offset": 21
    }
  ],
  "location": "CustomerLoginTest.selectUserName(String)"
});
formatter.result({
  "duration": 11373995800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerLoginTest.verifyButtonNotAppear()"
});
formatter.result({
  "duration": 3052787400,
  "status": "passed"
});
formatter.uri("loginOption.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Login Options",
  "description": "",
  "id": "login-options",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 23090595900,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Customer choose customer login option successfully",
  "description": "",
  "id": "login-options;customer-choose-customer-login-option-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click customer login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify system navigates to customer login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginOptionTest.clickCustomerLogin()"
});
formatter.result({
  "duration": 2119344600,
  "status": "passed"
});
formatter.match({
  "location": "LoginOptionTest.verifyCustomerLoginPage()"
});
formatter.result({
  "duration": 1054311900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 17059220000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Customer choose bank manager login option successfully",
  "description": "",
  "id": "login-options;customer-choose-bank-manager-login-option-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I click bank manager login button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify system navigates to manager login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginOptionTest.clickManagerLogin()"
});
formatter.result({
  "duration": 2094851800,
  "status": "passed"
});
formatter.match({
  "location": "LoginOptionTest.verifyManagerLoginPage()"
});
formatter.result({
  "duration": 1156535700,
  "status": "passed"
});
formatter.uri("manageCustomers.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Manage Customers\u0027 Accounts",
  "description": "",
  "id": "manage-customers\u0027-accounts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Manage Customers\u0027 Accounts Successfully",
  "description": "",
  "id": "manage-customers\u0027-accounts;manage-customers\u0027-accounts-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I type value as \u003csearchvalue\u003e on search box",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify that result of value as \u003csearchInput\u003e is visable on the table",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on title as \u003csortedcollum\u003e to sort",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify that user account at collumn as \u003ccollumnindex\u003e sorted successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click delete button at user account as \u003cuseraccountname\u003e account number as \u003caccount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify that manager can delete user account as \u003caccountname\u003e and number as \u003cdeletedaccount\u003e successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "manage-customers\u0027-accounts;manage-customers\u0027-accounts-successfully;",
  "rows": [
    {
      "cells": [
        "useraccountname",
        "account",
        "accountname",
        "deletedaccount",
        "searchvalue",
        "searchInput",
        "sortedcollum",
        "collumnindex"
      ],
      "line": 18,
      "id": "manage-customers\u0027-accounts;manage-customers\u0027-accounts-successfully;;1"
    },
    {
      "cells": [
        "Hermoine Granger",
        "1002",
        "Hermoine Granger",
        "1002",
        "v",
        "v",
        "Last Name",
        "2"
      ],
      "line": 19,
      "id": "manage-customers\u0027-accounts;manage-customers\u0027-accounts-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/list",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager/list",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 22999909000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Manage Customers\u0027 Accounts Successfully",
  "description": "",
  "id": "manage-customers\u0027-accounts;manage-customers\u0027-accounts-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I type value as v on search box",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify that result of value as v is visable on the table",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on title as Last Name to sort",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify that user account at collumn as 2 sorted successfully",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click delete button at user account as Hermoine Granger account number as 1002",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify that manager can delete user account as Hermoine Granger and number as 1002 successfully",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "v",
      "offset": 16
    }
  ],
  "location": "ManageCustomerAccountTest.verifySearchBox(String)"
});
formatter.result({
  "duration": 2351857500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "v",
      "offset": 33
    }
  ],
  "location": "ManageCustomerAccountTest.verifySearchSuccessfully(String)"
});
formatter.result({
  "duration": 191854800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 20
    }
  ],
  "location": "ManageCustomerAccountTest.setSortedCollum(String)"
});
formatter.result({
  "duration": 195625500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    }
  ],
  "location": "ManageCustomerAccountTest.verifySortSuccessfully(int)"
});
formatter.result({
  "duration": 168493500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 41
    },
    {
      "val": "1002",
      "offset": 76
    }
  ],
  "location": "ManageCustomerAccountTest.clickCustomerLogin(String,String)"
});
formatter.result({
  "duration": 1659348500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 49
    },
    {
      "val": "1002",
      "offset": 80
    }
  ],
  "location": "ManageCustomerAccountTest.deleteSuccessfully(String,String)"
});
formatter.result({
  "duration": 156842500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Search Customers\u0027 Accounts Unsuccessfully",
  "description": "",
  "id": "manage-customers\u0027-accounts;search-customers\u0027-accounts-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I type value as \u003csearchvalue\u003e on search box",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify that results of value as \u003csearchInput\u003e is wrong or nothing change",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "manage-customers\u0027-accounts;search-customers\u0027-accounts-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "searchvalue",
        "searchInput"
      ],
      "line": 26,
      "id": "manage-customers\u0027-accounts;search-customers\u0027-accounts-unsuccessfully;;1"
    },
    {
      "cells": [
        "t",
        "t"
      ],
      "line": 27,
      "id": "manage-customers\u0027-accounts;search-customers\u0027-accounts-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/list",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager/list",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 17045847700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Search Customers\u0027 Accounts Unsuccessfully",
  "description": "",
  "id": "manage-customers\u0027-accounts;search-customers\u0027-accounts-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I type value as t on search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify that results of value as t is wrong or nothing change",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "t",
      "offset": 16
    }
  ],
  "location": "ManageCustomerAccountTest.verifySearchBox(String)"
});
formatter.result({
  "duration": 2199404000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "t",
      "offset": 34
    }
  ],
  "location": "ManageCustomerAccountTest.verifySearchUnsuccessfully(String)"
});
formatter.result({
  "duration": 209369900,
  "status": "passed"
});
formatter.uri("openAccount.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Created by nththuy at 1/3/20"
    }
  ],
  "line": 2,
  "name": "Open Account",
  "description": "In order to open account, I want to have the adding customer feature so that I can add customer easily",
  "id": "open-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Open Account sucessfully",
  "description": "",
  "id": "open-account;open-account-sucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I choose account as \u003cfullname\u003e and currency as \u003ccurrency\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click open account",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that user account as \u003cuser\u003e is already opened",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "open-account;open-account-sucessfully;",
  "rows": [
    {
      "cells": [
        "fullname",
        "currency",
        "user"
      ],
      "line": 13,
      "id": "open-account;open-account-sucessfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "Pound",
        "Harry Potter"
      ],
      "line": 14,
      "id": "open-account;open-account-sucessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 22768592600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Open Account sucessfully",
  "description": "",
  "id": "open-account;open-account-sucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I choose account as Harry Potter and currency as Pound",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click open account",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that user account as Harry Potter is already opened",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    },
    {
      "val": "Pound",
      "offset": 49
    }
  ],
  "location": "OpenAccountTest.openAccount(String,String)"
});
formatter.result({
  "duration": 2387133300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.i_click_open_account()"
});
formatter.result({
  "duration": 1229077800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 30
    }
  ],
  "location": "OpenAccountTest.verifyUserAlreadyOpen(String)"
});
formatter.result({
  "duration": 8343284700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Open Account unsucessfully with null user name",
  "description": "",
  "id": "open-account;open-account-unsucessfully-with-null-user-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I choose account as \u003cfullname\u003e and currency as \u003ccurrency\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click open account",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that user account as \u003cuser\u003e is not already opened",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "open-account;open-account-unsucessfully-with-null-user-name;",
  "rows": [
    {
      "cells": [
        "fullname",
        "currency",
        "user"
      ],
      "line": 21,
      "id": "open-account;open-account-unsucessfully-with-null-user-name;;1"
    },
    {
      "comments": [
        {
          "line": 22,
          "value": "#      | Harry Potter        | ---Currency--- |Harry Potter      |"
        }
      ],
      "cells": [
        "---Customer Name---",
        "Pound",
        "---Customer Name---"
      ],
      "line": 23,
      "id": "open-account;open-account-unsucessfully-with-null-user-name;;2"
    },
    {
      "cells": [
        "---Customer Name---",
        "---Currency---",
        "---Customer Name---"
      ],
      "line": 24,
      "id": "open-account;open-account-unsucessfully-with-null-user-name;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 17089325300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#      | Harry Potter        | ---Currency--- |Harry Potter      |"
    }
  ],
  "line": 23,
  "name": "Open Account unsucessfully with null user name",
  "description": "",
  "id": "open-account;open-account-unsucessfully-with-null-user-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I choose account as ---Customer Name--- and currency as Pound",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click open account",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that user account as ---Customer Name--- is not already opened",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "---Customer Name---",
      "offset": 20
    },
    {
      "val": "Pound",
      "offset": 56
    }
  ],
  "location": "OpenAccountTest.openAccount(String,String)"
});
formatter.result({
  "duration": 2331742500,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.i_click_open_account()"
});
formatter.result({
  "duration": 1222924900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "---Customer Name---",
      "offset": 30
    }
  ],
  "location": "OpenAccountTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 5433936900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
      "offset": 13
    }
  ],
  "location": "CommonTest.openTargetWebsite(String)"
});
formatter.result({
  "duration": 17083845800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Open Account unsucessfully with null user name",
  "description": "",
  "id": "open-account;open-account-unsucessfully-with-null-user-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I choose account as ---Customer Name--- and currency as ---Currency---",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click open account",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that user account as ---Customer Name--- is not already opened",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "---Customer Name---",
      "offset": 20
    },
    {
      "val": "---Currency---",
      "offset": 56
    }
  ],
  "location": "OpenAccountTest.openAccount(String,String)"
});
formatter.result({
  "duration": 2272272300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.i_click_open_account()"
});
formatter.result({
  "duration": 1120973000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "---Customer Name---",
      "offset": 30
    }
  ],
  "location": "OpenAccountTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 5378440000,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/EndToEnd.feature");
formatter.feature({
  "name": "To test end to end functionality of banking application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test Login function of a Banking application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Login url of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.login_url_of_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"username\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_enters_a_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"manager_password\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_enters_a_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.user_should_be_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creation of new customer record",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@newcustomer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepsInApp.manager_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks New Customer link",
  "keyword": "When "
});
formatter.match({
  "location": "NewCustomer.manager_clicks_new_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager enters values in the given fields",
  "keyword": "And "
});
formatter.match({
  "location": "NewCustomer.manager_enters_values_in_the_given_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "New customer record should be created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomer.new_customer_record_should_be_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creation of new customer account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@newaccount"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepsInApp.manager_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks New Account link",
  "keyword": "When "
});
formatter.match({
  "location": "NewAccount.manager_clicks_new_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager enters valid \"cust_id\" in the customer id field",
  "keyword": "And "
});
formatter.match({
  "location": "NewAccount.manager_enters_valid_customer_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager chooses a valid account type",
  "keyword": "And "
});
formatter.match({
  "location": "NewAccount.manager_chooses_a_valid_account_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager enters valid initial deposit amount",
  "keyword": "And "
});
formatter.match({
  "location": "NewAccount.manager_enters_valid_initial_deposit_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "New customer account for \"cust_id\" should be created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewAccount.new_customer_account_should_be_created_successfully(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deposit amount in an active account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deposit"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepsInApp.user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Deposit link",
  "keyword": "When "
});
formatter.match({
  "location": "Deposit.user_clicks_deposit_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"account_id\" in the Account id field",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_enters_valid_account_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid deposit amount",
  "keyword": "And "
});
formatter.match({
  "location": "Deposit.user_enters_valid_deposit_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid description",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_enters_valid_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Amount should be deposited in the given account id",
  "keyword": "Then "
});
formatter.match({
  "location": "Deposit.check_if_amount_desposited()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Account Number must not be blank]\u003e but was:\u003c[5000]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefinitions.Deposit.check_if_amount_desposited(Deposit.java:39)\r\n\tat ✽.Amount should be deposited in the given account id(file:src/test/resources/EndToEnd.feature:36)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Withdraw amount from an active account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@withdrawal"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepsInApp.user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Withdrawal link",
  "keyword": "When "
});
formatter.match({
  "location": "Withdrawal.user_clicks_withdrawal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"account_id\" in the Account id field",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_enters_valid_account_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid withdrawal amount",
  "keyword": "And "
});
formatter.match({
  "location": "Withdrawal.user_enters_withdrawal_amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid description",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_enters_valid_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Amount should be withdrawn from the given account id",
  "keyword": "Then "
});
formatter.match({
  "location": "Withdrawal.check_if_amount_is_withdrawn()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Account Number must not be blank]\u003e but was:\u003c[5000]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefinitions.Withdrawal.check_if_amount_is_withdrawn(Withdrawal.java:38)\r\n\tat ✽.Amount should be withdrawn from the given account id(file:src/test/resources/EndToEnd.feature:46)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Balance enquiry in an active account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@balanceenquiry"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepsInApp.user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Balance Enquiry link",
  "keyword": "When "
});
formatter.match({
  "location": "BalanceEnquiry.user_clicks_balance_enquiry_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"account_id\" in the Account id field",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_enters_valid_account_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Balance amount in the given account id should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BalanceEnquiry.check_if_balance_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete an active account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteaccount"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepsInApp.manager_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks Delete Account link",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteAccount.manager_clicks_deposit_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager enters valid \"account_id\" in the Account id field",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteAccount.manager_enters_valid_account_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepsInApp.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager accepts the alert",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteAccount.accept_alert()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d101.0.4951.54)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QMHOFE8\u0027, ip: \u0027192.168.43.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\rajam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63480}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 46c624204bf097fa11e6dcbe4fd5b576\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:932)\r\n\tat stepdefinitions.DeleteAccount.accept_alert(DeleteAccount.java:42)\r\n\tat ✽.Manager accepts the alert(file:src/test/resources/EndToEnd.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "\"account_id\" should be deleted succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteAccount.check_if_account_deleted(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Test Logout function of a Banking application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@logout"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is successfully logged in and the session is active",
  "keyword": "Given "
});
formatter.match({
  "location": "Logout.user_is_successfully_logged_in_and_the_session_is_active()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the logout button and is logged out successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Logout.user_clicks_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
});
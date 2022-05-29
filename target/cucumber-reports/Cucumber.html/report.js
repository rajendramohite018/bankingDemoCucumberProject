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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[1949]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefinitions.NewAccount.new_customer_account_should_be_created_successfully(NewAccount.java:47)\r\n\tat ✽.New customer account for \"cust_id\" should be created successfully(file:src/test/resources/EndToEnd.feature:26)\r\n",
  "status": "failed"
});
});
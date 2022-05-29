package stepdefinitions;

import java.util.Properties;
import java.util.Random;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.JsonDataReader;
import utils.LoaderFunction;

public class NewCustomer extends LoaderFunction {
	Properties homeProperties = locators("src//main//java//locators//homePage.properties");
	Properties newCustomerProperties = locators("src//main//java//locators//newCustomerPage.properties");
	private WebDriver driver;
	JsonDataReader readObj = new JsonDataReader();
	Random rand = new Random();
	String expected_email_address = "email" + rand.nextInt(1000) + "@abc.com";

	public NewCustomer() {
		driver = DriverUtils.getDriver();
	}

	@Given("^Manager is logged in successfully$")
	public boolean manager_is_logged_in_successfully() {
		boolean is_new_customer_link_visible = false;
		try {
			is_new_customer_link_visible = is_displayed(driver, "linkText",
					homeProperties.getProperty("add_new_customer_link_loc"));
		} catch (InterruptedException e) {
			e.getMessage();
		}
		return is_new_customer_link_visible;
	}

	@When("^Manager clicks New Customer link$")
	public void manager_clicks_new_customer_link() throws Throwable {
		if (manager_is_logged_in_successfully())
			click_element(driver, "linkText", homeProperties.getProperty("add_new_customer_link_loc"));
	}

	@When("^Manager enters values in the given fields$")
	public void manager_enters_values_in_the_given_fields() throws Throwable {
		send_keys(driver, "xpath", newCustomerProperties.getProperty("customer_name_txt_loc"),
				readObj.retrievevalue("customer_name"));
		if (readObj.retrievevalue("gender").toString().equals("female")) {
			click_element(driver, "xpath", newCustomerProperties.getProperty("gender_female_radio_btn_loc"));
		} else
			click_element(driver, "xpath", newCustomerProperties.getProperty("gender_male_radio_btn_loc"));

		send_keys(driver, "id", newCustomerProperties.getProperty("date_picker_loc"),
				readObj.retrievevalue("date_of_birth"));
		send_keys(driver, "xpath", newCustomerProperties.getProperty("address_txt_loc"),
				readObj.retrievevalue("address"));
		send_keys(driver, "xpath", newCustomerProperties.getProperty("city_txt_loc"), readObj.retrievevalue("city"));
		send_keys(driver, "xpath", newCustomerProperties.getProperty("state_txt_loc"), readObj.retrievevalue("state"));
		send_keys(driver, "xpath", newCustomerProperties.getProperty("pin_txt_loc"), readObj.retrievevalue("pin"));
		send_keys(driver, "xpath", newCustomerProperties.getProperty("mobile_number_txt_loc"),
				readObj.retrievevalue("mobile_number"));
		send_keys(driver, "xpath", newCustomerProperties.getProperty("email_id_txt_loc"), expected_email_address);
		send_keys(driver, "xpath", newCustomerProperties.getProperty("password_field_loc"),
				readObj.retrievevalue("password"));
	}

	@Then("^New customer record should be created successfully$")
	public void new_customer_record_should_be_created_successfully() throws Throwable {
		String custId = getText(driver, "xpath", newCustomerProperties.getProperty("read_customer_id_loc"));
		String actual_email_address = getText(driver, "xpath",
				newCustomerProperties.getProperty("read_email_txt_loc"));
		readObj.writeValue("cust_id",custId);
		Assert.assertEquals(actual_email_address, expected_email_address);
	}
}

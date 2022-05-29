package stepdefinitions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class DriverUtils {
	private static boolean initialized = false;
	private static WebDriver driver;

	@Before
	public void beforeScenario() {
		if (!initialized) {
			initialized = true;
			//Setting system properties of ChromeDriver
			System.setProperty("webdriver.chrome.driver",
					"D:\\AutomationData\\javaWorkspace\\banking-demo-cucumber\\target\\chromedriver.exe");
			driver = new ChromeDriver();


		}
	}
	public static WebDriver getDriver() {
		return driver;
	}

}

package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//@RunWith(Cucumber.class)
//@CucumberOptions(features = {"src/test/java/features/NewAccount.feature"
//							},
//							 
//				 glue = {"stepdefinitions"})
@RunWith(Cucumber.class)
@CucumberOptions(
        features = { "src/test/resources/" },
        glue = { "stepdefinitions" },
        //tags= "@login or @newcustomer or @newaccount or @deposit",
        plugin = { "pretty", "html:target/cucumber-reports/Cucumber1.html"}
)

public class TestRunner {

}

# banking-demo 

Test basic workflows of demo banking website using Cucumber+Java+Selenium Automated test example in Java with Cucumber and Selenium WebDriver This project is an example of UI automated functional test for basic workflows of banking app using Selenium and Cucumber.
End to end Test scenarios are described in the feature file located here - /src/test/resources
Individual test scenarios can be found here - /src/test/java/features
Installation You need to have Java 8 JDK installed along with maven. 
To install all dependencies, run
$ mvn clean install

Following scenarios have been covered: 

Login
1. Verify whether new customer can be created
2. Verify new account can be created with valid customer id
3. Verify if amount can be deposited to a given account number
4. Verify if amount can be withdrawn from a given account number
5. Verify if balance enquiry can be done
6. Verify if an account can be deleted.
Logout

![alt text](https://github.com/priyasomangali/banking-demo/blob/master/Cucumber_Report.png)

To run:
Run the jUnit runner class.

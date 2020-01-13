package tests;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import runner.TestRunner;

import static tests.PageProvider.getCommonPage;
import static tests.PageProvider.getCustomerLoginPage;

/**
 * Created by nththuy on 1/3/20.
 */
public class CommonTest {


    @Given("Open website (.*)$")
    public void openTargetWebsite(String website) throws InterruptedException {
        Thread.sleep(7000);
        TestRunner.driver.get(website);
        getCommonPage().checkPageUrl(website);
        TestRunner.driver.manage().window().maximize();
        Thread.sleep(5000);
    }

    @Given("^I login successfully with username as (.*)$")
    public void loginBeforeAction(String loginUsername) throws InterruptedException {
        Thread.sleep(7000);
        getCustomerLoginPage().selectUserName(loginUsername);
        getCustomerLoginPage().checkLoginButtonIsShown();
        getCustomerLoginPage().clickLoginButton();
        getCustomerLoginPage().verifyNavigateToDetailPage(loginUsername);
    }

}

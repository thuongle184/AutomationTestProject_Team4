package tests;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class CustomerWithdrawlTest extends PageProvider{

    @When("^I login successfully with username as (.*)$")
    public void loginBeforeWithdraw(String usernameSelected) throws InterruptedException {
        Thread.sleep(2000);
        getCustomerLoginPage().selectUserName(usernameSelected);
        getCustomerLoginPage().clickLoginButton();
        Thread.sleep(5000);
    }


    @When("^I type deposit successfully with deposit as (.*)$")
    public void alreadyDepositBeforeWithdrawl(String depositAmount) throws Throwable {
        getCustomerDepositPage().navigateToDepositTab();
        Thread.sleep(2000);
        getCustomerDepositPage().typeDepositAmount(depositAmount);
        Thread.sleep(2000);
        getCustomerDepositPage().submitDeposit();

    }

    @When("^I open withdrawl tab$")
    public void openWithdrawlTab() throws Throwable {
        Thread.sleep(2000);
       getCustomerWithdrawlPage().navigateToWithdrawlTab();
    }


    @When("^I type withdrawl as(.*)$")
    public void chooseWithdrawlAmount(String withdrawlAmount) throws InterruptedException {
        Thread.sleep(2000);
        getCustomerWithdrawlPage().typeWithdrawlAmount(withdrawlAmount);
    }

    @When("^I click withdrawl submit button$")
    public void clickWithdrawlSubmitButton() throws InterruptedException {
        Thread.sleep(2000);
        getCustomerWithdrawlPage().submitWithdrawl();
    }

    @Then("^I verify that customer withdrawl successfully$")
    public void withdrawSuccesfully() throws InterruptedException {
        Thread.sleep(2000);
        getCustomerWithdrawlPage().verifyMessageSuccessfully();
    }

    @Then("^I verify that customer withdrawl unsuccessfully$")
    public void withdrawunSuccesfully() throws InterruptedException {
        Thread.sleep(2000);
        getCustomerWithdrawlPage().verifyMessageunSuccessfully();
    }

}
package tests;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class CustomerDepositTest extends PageProvider{

    @When("^I login with username as (.*) successfully$")
    public void loginBeforeDeposit(String usernameSelected) throws InterruptedException {
        Thread.sleep(2000);
        getCustomerLoginPage().selectUserName(usernameSelected);
        getCustomerLoginPage().clickLoginButton();
    }

    @When("^I click deposit tab$")
    public void clickDepositTab() throws InterruptedException {
        Thread.sleep(2000);
        getCustomerDepositPage().navigateToDepositTab();
    }

    @When("^I type the depsit as (.*)$")
    public void chooseDepositAmount(String depositAmount) throws InterruptedException {
        Thread.sleep(2000);
        getCustomerDepositPage().typeDepositAmount(depositAmount);
    }

    @When("^I click deposit submit button$")
    public void clickDepositSubmitButton() throws InterruptedException {
        Thread.sleep(10000);
        getCustomerDepositPage().submitDeposit();
        getCustomerDepositPage().getDateTime();
    }

    @Then("^I verify that customer deposit successfully$")
    public void verifyDepositSuccesfully() throws InterruptedException {
        getCustomerDepositPage().verifyMessageSuccessfully();
        Thread.sleep(5000);
        getTransaction().navigateTransactionTab();
        getTransaction().verifySuccessfullyAtTransaction(getCustomerDepositPage().getDateTime());

    }

    @Then("^I verify that customer deposit unsuccessfully$")
    public void verifyDepositunSuccesfully() throws InterruptedException {
        Thread.sleep(3000);
        getCustomerDepositPage().verifyMessageunSuccessfully();
    }
}

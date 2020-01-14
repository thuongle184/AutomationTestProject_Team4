package tests;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class CustomerDepositTest extends PageProvider{

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
        getCommonPage().getDateTime();
    }

    @Then("^I verify that customer deposit successfully (.*)$")
    public void verifyDepositSuccesfully(String depositAmount) throws InterruptedException {
        Thread.sleep(2000);
        getCustomerDepositPage().verifyMessageSuccessfully();
        Thread.sleep(5000);
        getTransaction().navigateTransactionTab();
        getTransaction().verifySuccessfullyAtTransaction(getCommonPage().getDateTime(), getCustomerDepositPage().getDeposit(depositAmount));

    }

    @Then("^I verify that customer deposit unsuccessfully$")
    public void verifyDepositunSuccesfully() throws InterruptedException {
        Thread.sleep(3000);
        getCustomerDepositPage().verifyMessageunSuccessfully();
    }
}

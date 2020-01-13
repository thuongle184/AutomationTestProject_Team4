package tests;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static tests.PageProvider.getCustomerDepositPage;

public class CustomerDepositTest {

    @When("^I click deposit button$")
    public void clickDepositTab() throws InterruptedException {
        Thread.sleep(2000);
        getCustomerDepositPage().navigateToDepositTab();
    }

    @When("^I type the deposit as (.*)$")
    public void chooseDepositAmount(String depositAmount) throws InterruptedException {
        Thread.sleep(2000);
        getCustomerDepositPage().typeDepositAmount(depositAmount);
    }

    @When("^I click deposit submit button$")
    public void clickDepositSubmitButton() throws InterruptedException {
        Thread.sleep(2000);
        getCustomerDepositPage().submitDeposit();
    }

    @Then("^I verify that customer deposit successfully$")
    public void depositSuccesfully() throws InterruptedException {
        Thread.sleep(2000);
        getCustomerDepositPage().verifyDepositSuccessfully();
    }
}

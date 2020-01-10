package tests;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static tests.PageProvider.getManageCustomerAccountPage;

public class ManageCustomerAccountTest {

    @When("^I click delete button at user account as (.*) account number as (.*)$")
    public void clickCustomerLogin(String accountNameInput, String accountNumberInput) throws Throwable {
        Thread.sleep(1000);
        getManageCustomerAccountPage().deleteCustomerAccount(accountNameInput, accountNumberInput, true);
    }

    @Then("^I verify that manager can delete user account as (.*) and number as (.*) successfully$")
    public void deleteSuccessfully(String accountNameInput, String accountNumberInput) throws InterruptedException {
        getManageCustomerAccountPage().checkCustomerAccountInformation(accountNameInput, accountNumberInput);
    }

    @When("^I type value as (.*) on search box$")
    public void verifySearchBox(String searchValueInput) throws InterruptedException {
        getManageCustomerAccountPage().checkSearchSuccessfully(searchValueInput);
    }
}

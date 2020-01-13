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
        getManageCustomerAccountPage().setSearchValue(searchValueInput);
    }

    @Then("^I verify that result of value as (.*) is visable on the table$")
    public void verifySearchSuccessfully(String valueSearch){
        getManageCustomerAccountPage().checkSearchSuccessfully(valueSearch, true);
    }

    @When("^I click on title as (.*) to sort$")
    public void setSortedCollum(String sortedCollum) throws InterruptedException {
        getManageCustomerAccountPage().setColumnSort(sortedCollum);
    }

    @Then("^I verify that user account at collumn as (.*) sorted successfully$")
    public void verifySortSuccessfully(int index){
        getManageCustomerAccountPage().verifySortResult(true, index);
    }

    @Then("^I verify that results of value as (.*) is wrong or nothing change$")
    public void verifySearchUnsuccessfully(String valueSearch){
        getManageCustomerAccountPage().checkSearchUnsuccessfully(valueSearch, false);
    }
}

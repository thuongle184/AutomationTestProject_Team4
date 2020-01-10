package tests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OpenAccountTest extends PageProvider {


    @When("^I choose account as (.+) and currency as (.+)$")
    public void openAccount(String fullname, String currency) throws InterruptedException {
        getOpenAccountPage().getUserName(fullname);
        getOpenAccountPage().getCurrency(currency);
    }

    @And("^I click open account$")
    public void i_click_open_account() throws InterruptedException {
        getOpenAccountPage().clickProcess();
    }

    @Then("^I verify that user account as (.*) is already opened$")
    public void verifyUserAlreadyOpen(String userFullName) throws InterruptedException {
        String accountNumber = getCommonPage().getAccountNumber();
        System.out.println(accountNumber+" hihuihiuhufdhf");
        getManageCustomerAccountPage().clickCustomerTab();
        getManageCustomerAccountPage().checkCustomerAccountInformation(userFullName, accountNumber);
    }

    @Then("^I verify that user account is not already opened$")
    public void verifyCustomerAddUnSuccessfully(String fullname) throws InterruptedException {
        Thread.sleep(3000);
        getOpenAccountPage().clickOpenAccountTab();
        Thread.sleep(3000);
        getOpenAccountPage().checkUserInformation(fullname, false);
    }

}

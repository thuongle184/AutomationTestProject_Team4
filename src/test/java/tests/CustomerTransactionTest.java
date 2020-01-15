package tests;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static java.lang.Thread.sleep;

public class CustomerTransactionTest extends PageProvider {

    @When("^I click transaction tab$")
    public void clickTransactionTab() throws Throwable {
        getTransaction().navigateTransactionTab();
    }

    @When("^I click next button$")
    public void clickNextButton() throws Throwable {
        getTransaction().nextButtonTransaction();
        sleep(2000);

    }

    @Then("^I verify the table show the next of table$")
    public void verifyNextPageAfterClickNextButton() throws Throwable {
        getTransaction().verifyNextButtonTransaction();
        sleep(2000);
    }

    @When("^I click top button$")
    public void clickTopButton() throws Throwable {
        getTransaction().topButtonTransaction();
        sleep(2000);

    }

    @Then("^I verify the table show the top of table$")
    public void verifyNextPageAfterClickTopButton() throws Throwable {
        getTransaction().verifyTopButtonTransaction();;
        sleep(2000);
    }


    @When("^I click reset button$")
    public void clickResetButton() throws Throwable {
        getTransaction().resetTableTransaction();
        sleep(5000);

    }

    @Then("^I verify the data transaction reseted$")
    public void verifyDataReseted() throws Throwable {
        getTransaction().verifyResetButtonSuccess();
        sleep(5000);

    }

    @When("^I click back button$")
    public void clickBackButton() throws Throwable {
        getTransaction().backButtonAtTransaction();
        sleep(5000);
    }

    @Then("^I verify page transaction backed$")
    public void verifyPageBack() throws Throwable {
        getTransaction().verifyBackButtonSuccess();
        sleep(5000);
    }




}

package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

import java.util.List;

import static java.lang.Thread.sleep;

public class TransactionsPage {

    @FindBy(css = "button.btn-lg:nth-child(1)")
    WebElement transactionTab;
    @FindBy(xpath = "//div[2]/table")
    WebElement table;
    @FindBy(xpath = "//div[2]/div/div[1]/button[1]")
    WebElement buttonBack;
    @FindBy(xpath = "//div[2]/div/div[1]/button[2]")
    WebElement buttonReset;

    @FindBy(css = ".logout")
    WebElement logoutButton;

    @FindBy(css = ".home")
    WebElement homeButton;

    @FindBy(css = ".fontBig")
    WebElement welcomeName;

    @FindBy(xpath = "//div[3]/button[3]")
    WebElement buttonNext;

    @FindBy(xpath = "//div[3]/button[2]")
    WebElement buttonTop;

    @FindBy(xpath = "//div[3]/button[1]")
    WebElement buttonComeBack;

    @FindBy(xpath = "//table/thead/tr/td[1]")
    WebElement trDateTime;

    @FindBy(xpath = "//table/thead/tr/td[2]")
    WebElement trAmount;

    @FindBy(xpath = "//table/thead/tr/td[3]")
    WebElement trTransactionType;

    public void navigateTransactionTab() throws InterruptedException {
        transactionTab.click();
        sleep(2000);
    }

    public void nextButtonTransaction() throws InterruptedException {
        buttonNext.click();
        sleep(3000);
    }

    public void verifyNextButtonTransaction() {

        if (buttonNext.isDisplayed() && buttonTop.isDisplayed() && buttonComeBack.isDisplayed()){
                System.out.println("navigated next page");
        }
        else System.out.println("no navigated next page");

    }

    public void topButtonTransaction() throws InterruptedException {
        buttonTop.click();
        sleep(3000);
    }

    public void verifyTopButtonTransaction() {

        if (trDateTime.isDisplayed() && trAmount.isDisplayed() && trTransactionType.isDisplayed()){
            System.out.println("top next page");
        }
        else System.out.println("no top next page");

    }
    public void resetTableTransaction() throws InterruptedException {
        buttonReset.click();
        sleep(3000);
    }

    public void verifyBackButtonSuccess() {
        if (logoutButton.isDisplayed() && homeButton.isDisplayed() && welcomeName.isDisplayed()) {
            System.out.println("Back button navigate correct");
            System.out.println("Navigate Home Page Successfully!!!");
        } else {
            System.out.println("Back button navigate incorrect");
            System.out.println("Navigate Home Page inSuccessfully!!!");
        }
    }

    public void backButtonAtTransaction() throws InterruptedException {
        buttonBack.click();
        sleep(3000);
    }

    public void verifyResetButtonSuccess() {
        List<WebElement> listTr = table.findElements(By.tagName("tr"));
        if (listTr.size() > 1) {
            System.out.println("Reset table unSuccessfully!!!!!!!!!");
        } else
            System.out.println("Reset table Successfully!!!!!!!!!");
    }




}
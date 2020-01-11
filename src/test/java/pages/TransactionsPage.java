package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

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

    public void navigateTransactionTab() throws InterruptedException {
        transactionTab.click();
        sleep(5000);
    }


    public void verifySuccessfullyAtTransaction(String numberDeposit, String messages) throws InterruptedException {
        List<WebElement> listTr = table.findElements(By.tagName("tr"));
        for (int i = 1; i < listTr.size(); i++) {
            List<WebElement> listTd = listTr.get(i).findElements(By.tagName("td"));

            if (listTd.get(0).getText().contains(numberDeposit) && listTd.get(1).getText().equals(2000)) {
                System.out.println("Add" + messages + " successfully !!!");
                break;
            }
            System.out.println("Add" + messages + " successfully !!!");
        }
    }



    public void resetTableTransaction(){
        buttonReset.click();
    }

    public void backButtonAtTransaction(){
        buttonBack.click();
    }


}

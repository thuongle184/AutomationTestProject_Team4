package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import runner.TestRunner;
import java.util.List;

public class ManageCustomerAccountPage {

    @FindBy(css = ".border > div:nth-child(2)")
    WebElement formScroll;
    @FindBy(css = "button.btn-lg:nth-child(3)")
    WebElement customerButton;
    @FindBy(css = ".table")
    WebElement accountTable;
    @FindBy(css = ".form-control")
    WebElement searchBox;

    public void clickCustomerTab() throws InterruptedException {
        Thread.sleep(1000);
        customerButton.click();
        System.out.println("roido");
        Thread.sleep(1000);
    }

//    public void viewCustomerList() throws InterruptedException {
//        Thread.sleep(3000);
//        WebElement element = TestRunner.driver.findElement(By.cssSelector(".border > div:nth-child(2)"));
//        ((JavascriptExecutor) TestRunner.driver).executeScript("arguments[0].scrollIntoView(true);", element);
//        //formScroll.click();
//        Thread.sleep(3000);
//    }

    public String[] devideName(String tempName){
        String[] devidedName = new String[]{};
        for (int i=0; i < tempName.length(); i++) {
            devidedName = tempName.split(" ");
        }
        return devidedName;
    }

    public List<WebElement> dataAccountTable() {
        List<WebElement> accountInforRows = null;
        if (accountTable.isDisplayed()){
            accountInforRows = accountTable.findElements(By.tagName("tr"));
        }
        return accountInforRows;
    }

    public boolean checkCustomerAccountInformation(String fullName, String accountNumber) throws InterruptedException {
        boolean isAdded = false;
        String[] name = devideName(fullName);
        List<WebElement> accountInforRows = dataAccountTable();

        for (int i = 1; i <= accountInforRows.size()-1; i++) {
            List<WebElement> accountInfor = accountInforRows.get(i).findElements(By.tagName("td"));
            if (accountInfor.get(0).getText().equals(name[0]) && accountInfor.get(1).getText().equals(name[1])
                    && accountInfor.get(3).getText().contains(accountNumber)) {
                System.out.println("User account found!");
                isAdded = true;
                break;
            }
        }
        return isAdded;
    }

    public void deleteCustomerAccount(String chosenAccount, String accountNumber, boolean deleted) throws InterruptedException {

        String[] accountToDelete = devideName(chosenAccount);
        List<WebElement> accountInforRows = dataAccountTable();
        boolean confirmDeleted = false;

        for (int i = 1; i <= accountInforRows.size()-1; i++) {
            List<WebElement> accountInfor = accountInforRows.get(i).findElements(By.tagName("td"));

            if (accountInfor.get(0).getText().equals(accountToDelete[0]) && accountInfor.get(1).getText().equals(accountToDelete[1])
                    && accountInfor.get(3).getText().contains(accountNumber)) {
                TestRunner.driver.findElement(By.xpath("//tr[" + i + "]//button")).click();
                confirmDeleted = checkCustomerAccountInformation(chosenAccount, accountNumber);
                break;
            }
        }

        if (deleted) {
            if (!confirmDeleted == false) Assert.assertEquals(1, 0);
        } else {
            if (confirmDeleted == false) Assert.assertEquals(1, 0);
        }
    }

    public void checkSearchSuccessfully(String searchValue) throws InterruptedException {
        if (searchBox.isDisplayed()){
            searchBox.clear();
            if (!searchBox.equals(null)) {
                this.searchBox.sendKeys(searchValue);
                Thread.sleep(2000);
            }
        }
    }

}
package pages;

import com.google.common.collect.Ordering;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import runner.TestRunner;

import java.util.ArrayList;
import java.util.List;

public class ManageCustomerAccountPage{

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
        Thread.sleep(1000);
    }

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
        boolean isOpened = false;
        String[] name = devideName(fullName);
        List<WebElement> accountInforRows = dataAccountTable();

        for (int i = 1; i <= accountInforRows.size()-1; i++) {
            List<WebElement> accountInfor = accountInforRows.get(i).findElements(By.tagName("td"));
            if (accountInfor.get(0).getText().equals(name[0]) && accountInfor.get(1).getText().equals(name[1])
                    && accountInfor.get(3).getText().contains(accountNumber)) {
                isOpened = true;
                break;
            }
        }
        return isOpened;
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

    public void setSearchValue(String searchValue) throws InterruptedException {
        if (searchBox.isDisplayed()){
            searchBox.clear();
            if (!searchBox.equals(null)) {
                this.searchBox.sendKeys(searchValue);
                Thread.sleep(2000);
            }
        }
    }

    public void checkSearchSuccessfully(String searchVualueInput, boolean isSearched){
        List<WebElement> accountInforRows = dataAccountTable();
        boolean searched = false;

        for (int i = 1; i <= accountInforRows.size()-1; i++) {
            List<WebElement> accountInfor = accountInforRows.get(i).findElements(By.tagName("td"));
            if (accountInfor.get(0).getText().contains(searchVualueInput) || accountInfor.get(1).getText().contains(searchVualueInput)) {
                searched=true;
                break;
            }
        }

        if (isSearched) {
            if (!searched) Assert.assertEquals(1, 0);
        } else {
            if (searched) Assert.assertEquals(1, 0);
        }
    }

    public void setColumnSort(String searchCollum){
        WebElement searchedCollum = TestRunner.driver.findElement(By.linkText(searchCollum));
        searchBox.clear();
        if (!searchedCollum.equals("null")){
            searchedCollum.click();
        }
    }

    public boolean verifySortResult(boolean isSorted, int columnIndex){
        boolean message = false;

        List<WebElement> accountInfor = accountTable.findElements(By.xpath("//table/tbody/tr/td["+columnIndex+"]"));
        List<String> firstNameSorted = new ArrayList<>();

        for (int i = 0; i <= accountInfor.size()-1; i++) {
            String tempName = accountInfor.get(i).getText();
            firstNameSorted.add(tempName);
        }
        message = Ordering.natural().reverse().isOrdered(firstNameSorted);

        if (isSorted) {
            if (!message) {
                Assert.assertEquals(1, 0);
            }
        } else {
            if (message) Assert.assertEquals(1, 0);
        }
        return message;
    }

    public void checkSearchUnsuccessfully(String searchVualueInput, boolean isSearched){
        List<WebElement> accountInforRows = dataAccountTable();
        boolean searched = true;

        for (int i = 1; i <= accountInforRows.size()-1; i++) {
            List<WebElement> accountInfor = accountInforRows.get(i).findElements(By.tagName("td"));
            if (!accountInfor.get(0).getText().contains(searchVualueInput) && !accountInfor.get(1).getText().contains(searchVualueInput)) {
                searched=false;
                break;
            }
        }

        if (isSearched) {
            if (!searched) Assert.assertEquals(1, 0);
        } else {
            if (searched) Assert.assertEquals(1, 0);
        }
    }

    public void checkCustomerAccount(String fullnameInput, boolean unseccessful){
        List<WebElement> accountInforRows = dataAccountTable();
        String[] account = devideName(fullnameInput);
        boolean unseccessfulMessage = false;

        for (int i = 1; i <= accountInforRows.size()-1; i++) {
            List<WebElement> accountInfor = accountInforRows.get(i).findElements(By.tagName("td"));
            if (account[0].compareTo(accountInfor.get(0).getText()) > 0 && account[1].compareTo(accountInfor.get(1).getText()) >0) {
                System.out.println(account[0]+account[1]);
                unseccessfulMessage = true;
                break;
            }
        }

        if (unseccessful) {
            if (!unseccessfulMessage) Assert.assertEquals(1, 0);
        } else {
            if (unseccessfulMessage) Assert.assertEquals(1, 0);
        }
    }
}
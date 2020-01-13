package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

import java.util.List;

public class CustomerLoginPage {

    @FindBy(id = "userSelect")
    WebElement usernameSelector;

    @FindBy(css = "button.btn:nth-child(2)")
    WebElement loginButton;

    @FindBy(css = ".logout")
    WebElement logoutButton;

    @FindBy(css = ".home")
    WebElement homeButton;

    @FindBy(css = ".fontBig")
    WebElement welcomeName;

    public void selectUserName(String usernameSelected) throws InterruptedException {
        Thread.sleep(5000);
        if (!(usernameSelector == null)) {
            usernameSelector.click();
        }
        List<WebElement> listCustomerName = usernameSelector.findElements(By.tagName("option"));
        for (WebElement customerName : listCustomerName) {
            if (customerName.getText().toLowerCase().equalsIgnoreCase(usernameSelected)) {
                customerName.click();
                Thread.sleep(3000);
                break;
            }
        }
    }

    public boolean checkLoginButtonIsShown() {
        if(loginButton.isDisplayed()){
            return true;
        }
        else{
            System.out.println("The name is not selected and login button is not appeared");
            return false;
        }
    }

    public void clickLoginButton() throws InterruptedException {
        if(checkLoginButtonIsShown()){
            System.out.println("Login button is appeared");
            Thread.sleep(3000);
            loginButton.click();
        }
        else{
            System.out.println("Element not present");
        }
    }

    public void verifyNavigateToDetailPage(String customerNameSelected) throws InterruptedException {
        System.out.println(customerNameSelected+"ten");
        if (logoutButton.isDisplayed() && homeButton.isDisplayed() && welcomeName.isDisplayed()){
            Thread.sleep(3000);
            if (welcomeName.getText().toLowerCase().equalsIgnoreCase(customerNameSelected))
                System.out.println("user loggined and is navigated to details information page");
        }
        else System.out.println("user not loggined");
    }

    public void buttonNotAppear(boolean loginBtnDisplayed) {
        if (!loginBtnDisplayed) {
            if (checkLoginButtonIsShown()) Assert.assertEquals(1, 0);
        } else {
            if (!checkLoginButtonIsShown()) Assert.assertEquals(1, 0);
        }
    }
}

package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class LoginOptionPage {

    @FindBy(css = "div.center:nth-child(1) > button:nth-child(1)")
    WebElement customerLoginButton;

    @FindBy(id = "userSelect")
    WebElement userSelect;

    @FindBy(css = "div.center:nth-child(3) > button:nth-child(1)")
    WebElement managerLoginButton;

    @FindBy(css = "button.btn-lg:nth-child(1)")
    WebElement addCustomerButton;

    @FindBy(css = "button.btn:nth-child(2)")
    WebElement openAccountButton;

    @FindBy(css = "button.btn-lg:nth-child(3)")
    WebElement customerListButton;


    public void pressCustomerLoginButton() throws InterruptedException {
        customerLoginButton.click();
        Thread.sleep(1000);
    }

    public void showCheckCustomerLoginPageResult() {
        List<WebElement> userNameList = userSelect.findElements(By.tagName("option"));
        if(userNameList.size() != 0){
            System.out.println("Element present");
        }
        else{
            System.out.println("Element not present");
        }
    }

    public void pressManagerLoginButton() throws InterruptedException {
        managerLoginButton.click();
        Thread.sleep(1000);
    }

    public void showCheckManagerLoginPageResult() {
        if(addCustomerButton.isDisplayed() && openAccountButton.isDisplayed() && customerListButton.isDisplayed()){
            System.out.println("Element present");
        }
        else{
            System.out.println("Element not present");
        }
    }
}

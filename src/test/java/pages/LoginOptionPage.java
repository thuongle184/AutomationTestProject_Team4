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

}

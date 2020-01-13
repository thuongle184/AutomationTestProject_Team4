package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddCustomerPage {

    @FindBy(xpath = "//div[1]/input")
    WebElement firstname;

    @FindBy(xpath = "//div[2]/input")
    WebElement lastname;

    @FindBy(xpath = "//div[3]/input")
    WebElement postcode;

    @FindBy(xpath = "//form/button")
    WebElement addCustomerBtn;


    public void setUserInformation(String firstnameInput, String lastnameInput, String postcodeInput) throws InterruptedException {
        this.firstname.clear();
        Thread.sleep(1000);
        if (!firstnameInput.equals("null")) {
            this.firstname.sendKeys(firstnameInput);
            Thread.sleep(2000);
        }
        this.lastname.clear();
        Thread.sleep(1000);
        if (!lastnameInput.equals("null")) {
            this.lastname.sendKeys(lastnameInput);
            Thread.sleep(2000);
        }
        this.postcode.clear();
        Thread.sleep(1000);
        if (!postcodeInput.equals("null")) {
            this.postcode.sendKeys(postcodeInput);
            Thread.sleep(2000);
        }

    }

    public void clickSubmit() {
        addCustomerBtn.click();
    }



}

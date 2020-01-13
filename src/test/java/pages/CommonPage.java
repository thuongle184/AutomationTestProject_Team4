package pages;

import org.openqa.selenium.Alert;
import org.testng.Assert;
import runner.TestRunner;

public class CommonPage {

    public String getAndCloseAlertPopup() throws InterruptedException {
        Thread.sleep(2000);
        Alert alert = TestRunner.driver.switchTo().alert();
        String alertMessage = alert.getText();
        System.out.println(alertMessage);
        alert.accept();
        return alertMessage;
    }

    public void checkPageUrl(String webUrl) throws InterruptedException {
        String URL = TestRunner.driver.getCurrentUrl();
        Assert.assertEquals(URL, webUrl);
        Thread.sleep(5000);

    }

    public String getAccountNumber() throws InterruptedException {
        Thread.sleep(2000);
        String alertText = getAndCloseAlertPopup();
        Thread.sleep(2000);
        String accountNumber = "";
        for(int i=0; i < alertText.length(); i++) {
            Boolean isDigit = Character.isDigit(alertText.charAt(i));
            if(isDigit) {
//                System.out.println("'"+ alertText.charAt(i)+"' is a number");
                accountNumber += alertText.charAt(i);
//                System.out.println(accountNumber);
//                break;
            }
        }
        System.out.println(accountNumber);
        return accountNumber;
    }
}

package tests;

import org.openqa.selenium.support.PageFactory;
import pages.*;
import runner.TestRunner;

import static java.lang.Thread.sleep;

public class PageProvider {

    private static LoginOptionPage loginOptionPage;
    private static CustomerLoginPage customerLoginPage;
    private static CustomerDepositPage customerDepositPage;
    private static CustomerWithdrawalPage customerWithdrawalPage;
    private static TransactionHistoryPage transactionHistoryPage;
    private static AddCustomerPage addCustomerPage;
    private static OpenAccountPage openAccountPage;
    private static ManageCustomerAccountPage manageCustomerAccountPage;
    private static CommonPage commonPage;


    public static AddCustomerPage getAddCustomerPage() throws InterruptedException {
        if (addCustomerPage == null) {
        addCustomerPage = PageFactory.initElements(TestRunner.driver, AddCustomerPage.class);
        }
        sleep(5000);
        return addCustomerPage;
    }

    public static CommonPage getCommonPage() {
        if (commonPage == null) {
            commonPage = PageFactory.initElements(TestRunner.driver, CommonPage.class);
        }
        return commonPage;
    }

    public static CustomerDepositPage getCustomerDepositPage() throws InterruptedException {
        if (customerDepositPage == null) {
        customerDepositPage = PageFactory.initElements(TestRunner.driver, CustomerDepositPage.class);
        }
        sleep(5000);
        return customerDepositPage;
    }

    public static CustomerLoginPage getCustomerLoginPage() throws InterruptedException {
        //if (customerLoginPage == null) {
            customerLoginPage = PageFactory.initElements(TestRunner.driver, CustomerLoginPage.class);
       // }
        sleep(5000);
        return customerLoginPage;
    }

    public static CustomerWithdrawalPage getCustomerWithdrawalPage() throws InterruptedException {
       // if (customerWithdrawalPage == null) {
            customerWithdrawalPage = PageFactory.initElements(TestRunner.driver, CustomerWithdrawalPage.class);
       // }
        sleep(5000);
        return customerWithdrawalPage;
    }

    public static LoginOptionPage getLoginOptionPage() throws InterruptedException {
        if (loginOptionPage == null) {
            loginOptionPage = PageFactory.initElements(TestRunner.driver, LoginOptionPage.class);
        }
        sleep(5000);
        return loginOptionPage;
    }

    public static ManageCustomerAccountPage getManageCustomerAccountPage() throws InterruptedException {
        if (manageCustomerAccountPage == null) {
        manageCustomerAccountPage = PageFactory.initElements(TestRunner.driver, ManageCustomerAccountPage.class);
        }
        sleep(5000);
        return manageCustomerAccountPage;
    }

    public static OpenAccountPage getOpenAccountPage() throws InterruptedException {
       // if (openAccountPage == null) {
            openAccountPage = PageFactory.initElements(TestRunner.driver, OpenAccountPage.class);
        //}
        sleep(5000);
        return openAccountPage;
    }

    public static TransactionHistoryPage getTransactionHistoryPage() throws InterruptedException {
       // if (transactionHistoryPage == null) {
        transactionHistoryPage = PageFactory.initElements(TestRunner.driver, TransactionHistoryPage.class);
       // }
        sleep(5000);
        return transactionHistoryPage;
    }

}

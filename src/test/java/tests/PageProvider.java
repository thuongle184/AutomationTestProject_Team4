package tests;

import org.openqa.selenium.support.PageFactory;
import pages.*;
import runner.TestRunner;

public class PageProvider {

    private static LoginOptionPage loginOptionPage;
    private static CustomerLoginPage customerLoginPage;
    private static CustomerDepositPage customerDepositPage;
    private static AddCustomerPage addCustomerPage;
    private static OpenAccountPage openAccountPage;
    private static ManageCustomerAccountPage manageCustomerAccountPage;
    private static CommonPage commonPage;


    public static AddCustomerPage getAddCustomerPage() {
        if (addCustomerPage == null) {
            addCustomerPage = PageFactory.initElements(TestRunner.driver, AddCustomerPage.class);
        }
        return addCustomerPage;
    }


    public static OpenAccountPage getOpenAccountPage() {
        //if (openAccountPage == null) {
            openAccountPage = PageFactory.initElements(TestRunner.driver, OpenAccountPage.class);
        //}
        return openAccountPage;
    }


    public static CommonPage getCommonPage() {
        if (commonPage == null) {
            commonPage = PageFactory.initElements(TestRunner.driver, CommonPage.class);
        }
        return commonPage;
    }

    public static LoginOptionPage getLoginOptionPage() {
        if (loginOptionPage == null) {
            loginOptionPage = PageFactory.initElements(TestRunner.driver, LoginOptionPage.class);
        }
        return loginOptionPage;
    }

    public static CustomerLoginPage getCustomerLoginPage(){
        //if (customerLoginPage == null) {
            customerLoginPage = PageFactory.initElements(TestRunner.driver, CustomerLoginPage.class);
       // }
        return customerLoginPage;
    }

    public static CustomerDepositPage getCustomerDepositPage(){
        if (customerDepositPage == null) {
            customerDepositPage = PageFactory.initElements(TestRunner.driver, CustomerDepositPage.class);
        }
        return customerDepositPage;
    }

    public static ManageCustomerAccountPage getManageCustomerAccountPage(){
        ///if (manageCustomerAccountPage == null) {
            manageCustomerAccountPage = PageFactory.initElements(TestRunner.driver, ManageCustomerAccountPage.class);
        //}
        return manageCustomerAccountPage;
    }
}

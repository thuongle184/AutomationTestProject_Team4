# new feature
# Tags: optional

Feature: Manage Customers' Accounts

  Background:
    Given Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/list

  Scenario Outline: Manage Customers' Accounts Successfully
#    When I scroll to view all the customers' account
#    Then I verify that I can see from the begining to the end of the list
    When I click delete button at user account as <useraccountname> account number as <account>
    Then I verify that manager can delete user account as <accountname> and number as <deletedaccount> successfully
    When I type value as <searchvalue> on search box
#    Then I verify that result is visable on the table
    Examples:
    |useraccountname  | account | accountname     | deletedaccount | searchvalue |
    |Hermoine Granger |1002     |Hermoine Granger | 1002           |t            |
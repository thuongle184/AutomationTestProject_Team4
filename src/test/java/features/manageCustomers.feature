# new feature
# Tags: optional

Feature: Manage Customers' Accounts

  Background:
    Given Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/list

  Scenario Outline: Manage Customers' Accounts Successfully
    When I type value as <searchvalue> on search box
    Then I verify that result of value as <searchInput> is visable on the table
    When I click on title as <sortedcollum> to sort
    Then I verify that user account at collumn as <collumnindex> sorted successfully
    When I click delete button at user account as <useraccountname> account number as <account>
    Then I verify that manager can delete user account as <accountname> and number as <deletedaccount> successfully

    Examples:
    |useraccountname  | account | accountname     | deletedaccount | searchvalue | searchInput | sortedcollum |collumnindex|
    |Hermoine Granger |1002     |Hermoine Granger | 1002           |v            |v            |Last Name     |2           |

  Scenario Outline: Search Customers' Accounts Unsuccessfully
    When I type value as <searchvalue> on search box
    Then I verify that results of value as <searchInput> is wrong or nothing change

    Examples:
     | searchvalue | searchInput |
     |t            |t            |

#  Scenario Outline: Sort Customers' Accounts Unsuccessfully
#    When I click on title as <sortedcollum> to sort
#    Then I verify that user account at collumn as <collumnindex> sorted successfully
#
#    Examples:
#      | sortedcollum |collumnindex|
#      |Last Name     |2           |
#
#  Scenario Outline: Delete Customers' Accounts Unsuccessfully
#    When I click delete button at user account as <useraccountname> account number as <account>
#    Then I verify that manager can delete user account as <accountname> and number as <deletedaccount> successfully
#
#    Examples:
#      |useraccountname  | account | accountname     | deletedaccount |
#      |Hermoine Granger |1002     |Hermoine Granger | 1002           |
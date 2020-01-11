# new feature
# Tags: optional

Feature: Customer Deposit

  Background:
    Given Open website http://www.way2automation.com/angularjs-protractor/banking/#/customer

  Scenario Outline: Customer Deposit unSuccessfully
    When I login with username as <username> successfully
    When I click deposit tab
    And I type the depsit as <deposit>
    And I click deposit submit button
    Then I verify that customer deposit unsuccessfully

    Examples:
      | username   | deposit |
      | Ron Weasly |         |


  Scenario Outline: Customer Deposit Successfully when the input valid
    When I login with username as <username> successfully
    When I click deposit tab
    And I type the depsit as <deposit>
    And I click deposit submit button
    Then I verify that customer deposit successfully

    Examples:
      | username   | deposit |
      | Ron Weasly | 2000    |



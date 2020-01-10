# new feature
# Tags: optional

Feature: Customer Deposit
  Background:
    Given Open website https://www.way2automation.com/angularjs-protractor/banking/#/customer
    And I login successfully with username as Ron Weasly

  Scenario Outline: Customer Deposit Successfully
    When I click deposit button
    And I type the deposit as <deposit>
    And I click deposit submit button
    Then I verify that customer deposit successfully

    Examples:
      | deposit |
      | 2000    |
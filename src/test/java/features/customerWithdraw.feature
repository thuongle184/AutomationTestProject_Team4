# new feature
# Tags: optional

Feature: Customer withdraw

  Background:
    Given Open website http://www.way2automation.com/angularjs-protractor/banking/#/customer

  Scenario Outline: Customer Withdrawl Successfully
    When I login successfully with username as <username>
    And I type deposit successfully with deposit as <deposit>
    When I open withdrawl tab
    When I type withdrawl as <withdrawl>
    And  I click withdrawl submit button
    Then I verify that customer withdrawl successfully

    Examples:
      | username   | deposit | withdrawl |
      | Ron Weasly | 2000    | 1000      |


  Scenario Outline: Customer Withdrawl unSuccessfully
    When I login successfully with username as <username>
    And I type deposit successfully with deposit as <deposit>
    When I open withdrawl tab
    When I type withdrawl as <withdrawl>
    And  I click withdrawl submit button
    Then I verify that customer withdrawl unsuccessfully

    Examples:
      | username   | deposit | withdrawl |
      | Ron Weasly | 1000    | 2000      |
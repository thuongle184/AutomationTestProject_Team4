# new feature
# Tags: optional

Feature: Customer Transaction

  Background:
    Given Open website http://www.way2automation.com/angularjs-protractor/banking/#/customer
    When I login successfully with username as Hermoine Granger

    Scenario: Customer Transaction Successfully
      When I click transaction tab
      When I click next button
      Then I verify the table show the next of table
      When I click top button
      Then I verify the table show the top of table
      When I click reset button
      Then I verify the data transaction reseted
      When I click back button
      Then I verify page transaction backed





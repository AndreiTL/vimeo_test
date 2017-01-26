@component(HomePg)
Feature: Testing home page

  Scenario: Browser refresh
    Given I clean allCookies
    And I disable synchronization

  Scenario: Open Home page
    Given I am on "Home" page

  Scenario: I check start page
    When I am staying on "Home" page
    Then "Header Desktop" should be visible
      And "Join Button" should be visible
      And "Log In Button" should be visible
      And "Avatar" should not be visible

  Scenario: Open Login modal window
    When I click "Log In Button"
      And I wait visibility of "Modal LogIn" element on page "Home"
      And I wait 1 seconds
    Then "UserEmail" should be visible
      And "UserPassword" should be visible
      And "Log In with email" should be visible

  Scenario: Make login
    When I am staying on "Home" page
    Then "Modal LogIn" should be visible
      And I type "andrei.qa.in@gmail.com" in "UserEmail"
      And I type "LLL" in "UserPassword"
    When I click "Log In with email"
      And I wait 2 seconds
    Then I should not find "Modal LogIn" on page "Home"

  Scenario: Check avatar
    When I wait 1 seconds
    Then "Avatar" should be visible

  Scenario: Check absence of Login button
    When I am staying on "Home" page
    Then I should not find "Log In Button" on page "Home"
      And I should not find "Join Button" on page "Home"

  Scenario: Check dropdown under avatar
    When I am staying on "Home" page
      And I move mouse over "Avatar"
    Then "Dropdown menu" should be visible
    When I am staying on "Home" page
      And I move mouse over "Upload Button"
    Then "Dropdown menu" should be hidden on page "Home"

  Scenario: I check content
    When I am staying on "Home" page
    Then "Cameo Content" should be visible
      And "Cameo Intro Wrapper" should be visible
      And Element "Cameo Intro Wrapper" should have opacity "1"
      And Element "Content Menu" should have opacity "0"

    When I scroll down to "500" px
    Then Element "Cameo Intro Wrapper" should have opacity "0"
      And Element "Content Menu" should have opacity greater then "0.5"

    When I scroll down to "500" px
    Then Element "Content Menu" should have opacity "1"

    When I wait 4 seconds

#  Scenario: Open Home page
#    Given I am on "Home" page
#      And I clean allCookies
#      And I disable synchronization
#    Then I should be on "WKLogin" page
#
#  Scenario: I check login page
#    When I am staying on "WKLogin" page
#    Then "LoginArea" should be visible
#      And "LoginInput" should be visible
#      And "PasswordInput" should be visible
#      And "SubmitButton" should be visible
#
#  Scenario: Make login
#    When I am staying on "WKLogin" page
#    Then I type "na\Epam.Trainee" in "LoginInput"
#      And I type "Course2016#q3" in "PasswordInput"
#    When I click "SubmitButton"
#    Then I should be on "MainToken" page
#
#
#  Scenario: Check Main page
#    When I wait visibility of "Bua main component" element on page "Main"
#    Then I should be on "Main" page
#      And I enable synchronization
#    When I am staying on "Main" page
#    Then "Bua main component" should be visible
#      And "Bua header component" should be visible
#      And "Bua navigation bar component" should be visible
#      And "Bua content component" should be visible
#      And "Bua actions bar component" should be visible
#      And "Bua grid component" should be visible
#      And "Bua footer component" should be visible
#
#  Scenario: Check Header on Main page
#    When I am staying on "Main" page
#    Then "Logout Button" should be visible
#
#  Scenario Outline: Check existance "<TabName>" on Navigation Bar
#    When I am staying on "Main" page
#    Then "<TabName>" should be visible
#    Examples:
#      |TabName|
#      |Users Management Tab Button|
#      |Roles Management Tab Button|
#      |Product Management Tab Button|
#      |Application Management Tab Button|
#
#  Scenario: I check log out confirmation modal window
#    When I click "Logout Button"
#    Then "Bua confirm logout modal" should be visible
#      And "Button Close window" should be visible
#      And "Button No" should be visible
#      And "Button Yes" should be visible
#
#    When I click "Button Close window"
#    Then I should not find "Bua confirm logout modal" on page "Main"
#
#    When I click "Logout Button"
#    Then "Bua confirm logout modal" should be visible
#
#    When I click "Button No"
#    Then I should not find "Bua confirm logout modal" on page "Main"
#
#    When I click "Logout Button"
#    Then "Bua confirm logout modal" should be visible
#
#    When I click "Button Yes"
#    Then I disable synchronization
#      And I should be on "WKLogin" page
#      And "LoginInput" should be visible
#      And "PasswordInput" should be visible
#      And "SubmitButton" should be visible

  Scenario: Clean browser
    Given I clean allCookies
    Then I close browser
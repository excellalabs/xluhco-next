Feature: An Excellian should be able to login and create and track their shortlinks

  # Do we actually want to have a user interface
  Scenario: A shortend URL should forward to a specified URL
    Given I am an Excellian logged in with a valid account
    When I visit the admin page

  # Are all users equal?
  # Does JumpCloud have differing role permissions?
  Scenario: An admin has privileges a regular user doesn't

Feature: An Excellian should be able to create an account and login

  Scenario: An Excellian should be able to login
    When An Excellian goes to login page
    And An Excellian enters valid login details
    Then An Excellian should have access to admin page

   # they should be able to create links and see stats for past links
   # Are we intending single sign ons?
   Scenario: An Excellian should be able to signup
     When An Excellian is signed in with JumpCloud
     And An Excellian signs into XhulCo for the first time
     Then An Excellian should have admin access
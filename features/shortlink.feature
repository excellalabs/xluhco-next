Feature: An Excellian I should have access to shortlinks

  # Should the analytics be our thing
  Scenario: An Excellian I should see analytics
    Given an Excellian has an existing link
    When Someone visits that link
    Then the visit link should have one more view
    And an Excellian should see the change on their admin page

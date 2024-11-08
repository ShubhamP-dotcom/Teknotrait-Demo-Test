Feature: Purchase Product
  Scenario: Search and buy a product
    Given I am logged in as a customer
    When I search for "Jacket"
    And I add the product to the cart
    And I fill in shipping details
    Then the order should be successfully placed
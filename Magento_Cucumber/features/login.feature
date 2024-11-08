Feature: The Magento Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <email> and <password>
    Then I should see a Welcome message on Panel Header

    Examples:
      | email                      | password  |
      | shubham.pardhe@outlook.com | Admin@123 | 

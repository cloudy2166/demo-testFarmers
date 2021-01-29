Feature: User buys goods on https://www.farmers.co.nz
    In order to buy goods on https://www.farmers.co.nz
    As a registered user on this website
    I want to choose goods to buy

  Scenario Outline: addGoodsToCart (<hiptest-uid>)
    Given Sign In with my user name
    And Move cusor to MEN of the main menu
    And Click Jeans on the pop-up menu
    And Choose brand "<brand>"
    Then Verify all the jeans listed are "<brand>"
    When Click Jack & Jones Glenn Slim Jean, Light Blue
    And Select a size
    And Select quantify as "<number>"
    And Click button of Add to cart
    Then Verify My Shopping successfull
    When Click Continue Shopping
    Then Verify the number displayed in right top of the cart image is "<expectedResult>"

    Examples:
      | number | brand | expectedResult | hiptest-uid |
      | 2 | Jack & Jones | 2 | uid:209d5738-219f-4356-95c7-c57a5fa6a6ef |

  Scenario Outline: reviewGoodsInCart (<hiptest-uid>)
    Given I added "<number>" goods to my cart at last signing in
    And Sign In with my user name
    When Click the cart image
    Then Verify the quantity of goods in pop-up page is "<expectedResult>"

    Examples:
      | number | expectedResult | hiptest-uid |
      | 2 | 99999 | uid:9289bfb8-d93d-4549-9187-a704cb7f0fa7 |

  Scenario Outline: cancelGoodsInCart (<hiptest-uid>)
    Given I added "<number>" goods to my cart at last signing in
    And Sign In with my user name
    When Click the cart image
    And Click Checkout in the pop-up page
    Then Verify my shopping info of "<expectedResult1>" is displayed on the current page
    When Click Remove on the current page
    Then Verify notification of "<expectedResult2>" is displayed on the current page

    Examples:
      | number | expectedResult1 | expectedResult2 | hiptest-uid |
      | 2 | Your Shopping Bag | Your cart is currently empty. | uid:d369e96e-d8fd-47ce-bbbf-f49f17c675b4 |

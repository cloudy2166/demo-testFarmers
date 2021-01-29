Feature: User Signs in https://www.farmers.co.nz
    In order to login https://www.farmers.co.nz
    As a registered user on this website
    I want to sign in with my username and password

  Scenario Outline: loginWithRightUserAndRightPassword (<hiptest-uid>)
    Given Open web page with URL
    When Click SIGN IN on the right top
    Then Verify the page for signing in is displayed
    When Input user name "<Email>"
    And Input password "<PassWord>"
    And Click Sign In button
    Then Verify my login is successful with "<expectedResult1>" and "<expectedResult2>"

    Examples:
      | Email | PassWord | expectedResult1 | expectedResult2 | hiptest-uid |
      | cloudy2166@gmail.com | noguess12 | SIGN OUT | MY ACCOUNT | uid:eaa9b802-f83a-47b0-9ea8-6a79209dac75 |

  Scenario Outline: loginWithRightUserAndWrongPassword (<hiptest-uid>)
    Given Open web page with URL
    When Click SIGN IN on the right top
    Then Verify the page for signing in is displayed
    When Input user name "<Email>"
    And Input password "<PassWord>"
    And Click Sign In button
    Then Verify my login is failed with "<expectedResult>"

    Examples:
      | Email | PassWord | expectedResult | hiptest-uid |
      | cloudy2166@gmail.com | xxxxxxxxxxxx | Your email or password is incorrect, please try again | uid:1f4bad52-7749-41a0-8f2d-64a4b527dcb0 |

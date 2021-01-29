$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("User_Signs_in_httpswwwfarmersconz.feature");
formatter.feature({
  "line": 1,
  "name": "User Signs in https://www.farmers.co.nz",
  "description": "  In order to login https://www.farmers.co.nz\r\n  As a registered user on this website\r\n  I want to sign in with my username and password",
  "id": "user-signs-in-https://www.farmers.co.nz",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "loginWithRightUserAndRightPassword (\u003chiptest-uid\u003e)",
  "description": "",
  "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandrightpassword-(\u003chiptest-uid\u003e)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Open web page with URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click SIGN IN on the right top",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify the page for signing in is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Input user name \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Input password \"\u003cPassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify my login is successful with \"\u003cexpectedResult1\u003e\" and \"\u003cexpectedResult2\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandrightpassword-(\u003chiptest-uid\u003e);",
  "rows": [
    {
      "cells": [
        "Email",
        "PassWord",
        "expectedResult1",
        "expectedResult2",
        "hiptest-uid"
      ],
      "line": 16,
      "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandrightpassword-(\u003chiptest-uid\u003e);;1"
    },
    {
      "cells": [
        "cloudy2166@gmail.com",
        "noguess12",
        "SIGN OUT",
        "MY ACCOUNT",
        "uid:f2b7cb34-3fe4-4261-a15c-4b20c43607f7"
      ],
      "line": 17,
      "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandrightpassword-(\u003chiptest-uid\u003e);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "loginWithRightUserAndRightPassword (uid:f2b7cb34-3fe4-4261-a15c-4b20c43607f7)",
  "description": "",
  "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandrightpassword-(\u003chiptest-uid\u003e);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Open web page with URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click SIGN IN on the right top",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify the page for signing in is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Input user name \"cloudy2166@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Input password \"noguess12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify my login is successful with \"SIGN OUT\" and \"MY ACCOUNT\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.openWebPageWithURL()"
});
formatter.result({
  "duration": 12313618800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickSIGNINOnTheRightTop()"
});
formatter.result({
  "duration": 365196800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyThePageForSigningInIsDisplayed()"
});
formatter.result({
  "duration": 1590254800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cloudy2166@gmail.com",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.inputUserNameP1(String)"
});
formatter.result({
  "duration": 452837100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "noguess12",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.inputPasswordP1(String)"
});
formatter.result({
  "duration": 174649900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickSignInButton()"
});
formatter.result({
  "duration": 3881835900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SIGN OUT",
      "offset": 36
    },
    {
      "val": "MY ACCOUNT",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.verifyMyLoginIsSuccessfulWithP1AndP2(String,String)"
});
formatter.result({
  "duration": 4090796000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "loginWithRightUserAndWrongPassword (\u003chiptest-uid\u003e)",
  "description": "",
  "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandwrongpassword-(\u003chiptest-uid\u003e)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Open web page with URL",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click SIGN IN on the right top",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify the page for signing in is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Input user name \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Input password \"\u003cPassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify my login is failed with \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandwrongpassword-(\u003chiptest-uid\u003e);",
  "rows": [
    {
      "cells": [
        "Email",
        "PassWord",
        "expectedResult",
        "hiptest-uid"
      ],
      "line": 29,
      "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandwrongpassword-(\u003chiptest-uid\u003e);;1"
    },
    {
      "cells": [
        "cloudy2166@gmail.com",
        "xxxxxxxxxxxx",
        "Your email or password is incorrect, please try again",
        "uid:8c569b38-ff49-48db-8471-65f1af63f4d7"
      ],
      "line": 30,
      "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandwrongpassword-(\u003chiptest-uid\u003e);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "loginWithRightUserAndWrongPassword (uid:8c569b38-ff49-48db-8471-65f1af63f4d7)",
  "description": "",
  "id": "user-signs-in-https://www.farmers.co.nz;loginwithrightuserandwrongpassword-(\u003chiptest-uid\u003e);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Open web page with URL",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click SIGN IN on the right top",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify the page for signing in is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Input user name \"cloudy2166@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Input password \"xxxxxxxxxxxx\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify my login is failed with \"Your email or password is incorrect, please try again\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.openWebPageWithURL()"
});
formatter.result({
  "duration": 9468952300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickSIGNINOnTheRightTop()"
});
formatter.result({
  "duration": 184767600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyThePageForSigningInIsDisplayed()"
});
formatter.result({
  "duration": 1607288000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cloudy2166@gmail.com",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.inputUserNameP1(String)"
});
formatter.result({
  "duration": 518319300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxxxxxxx",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.inputPasswordP1(String)"
});
formatter.result({
  "duration": 175979000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickSignInButton()"
});
formatter.result({
  "duration": 2024935000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your email or password is incorrect, please try again",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.verifyMyLoginIsFailedWithP1(String)"
});
formatter.result({
  "duration": 2478897800,
  "status": "passed"
});
formatter.uri("User_buys_goods_on_httpswwwfarmersconz.feature");
formatter.feature({
  "line": 1,
  "name": "User buys goods on https://www.farmers.co.nz",
  "description": "  In order to buy goods on https://www.farmers.co.nz\r\n  As a registered user on this website\r\n  I want to choose goods to buy",
  "id": "user-buys-goods-on-https://www.farmers.co.nz",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "addGoodsToCart (\u003chiptest-uid\u003e)",
  "description": "",
  "id": "user-buys-goods-on-https://www.farmers.co.nz;addgoodstocart-(\u003chiptest-uid\u003e)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Sign In with my user name",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Move cusor to MEN of the main menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Jeans on the pop-up menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose brand \"\u003cbrand\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify all the jeans listed are \"\u003cbrand\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click Jack \u0026 Jones Glenn Slim Jean, Light Blue",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Select a size",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select quantify as \"\u003cnumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click button of Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify My Shopping successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click Continue Shopping",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify the number displayed in right top of the cart image is \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "user-buys-goods-on-https://www.farmers.co.nz;addgoodstocart-(\u003chiptest-uid\u003e);",
  "rows": [
    {
      "cells": [
        "number",
        "brand",
        "expectedResult",
        "hiptest-uid"
      ],
      "line": 21,
      "id": "user-buys-goods-on-https://www.farmers.co.nz;addgoodstocart-(\u003chiptest-uid\u003e);;1"
    },
    {
      "cells": [
        "2",
        "Jack \u0026 Jones",
        "2",
        "uid:0ae9c0c5-a512-415d-a8c1-e96a83e869ab"
      ],
      "line": 22,
      "id": "user-buys-goods-on-https://www.farmers.co.nz;addgoodstocart-(\u003chiptest-uid\u003e);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "addGoodsToCart (uid:0ae9c0c5-a512-415d-a8c1-e96a83e869ab)",
  "description": "",
  "id": "user-buys-goods-on-https://www.farmers.co.nz;addgoodstocart-(\u003chiptest-uid\u003e);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Sign In with my user name",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Move cusor to MEN of the main menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Jeans on the pop-up menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose brand \"Jack \u0026 Jones\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify all the jeans listed are \"Jack \u0026 Jones\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click Jack \u0026 Jones Glenn Slim Jean, Light Blue",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Select a size",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select quantify as \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click button of Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify My Shopping successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click Continue Shopping",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify the number displayed in right top of the cart image is \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.signInWithMyUserName()"
});
formatter.result({
  "duration": 13652081500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.moveCusorToMENOfTheMainMenu()"
});
formatter.result({
  "duration": 172660400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickJeansOnThePopupMenu()"
});
formatter.result({
  "duration": 8005419500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jack \u0026 Jones",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.chooseBrandP1(String)"
});
formatter.result({
  "duration": 3183980500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jack \u0026 Jones",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.verifyAllTheJeansListedAreP1(String)"
});
formatter.result({
  "duration": 5718814600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickJackJonesGlennSlimJeanLightBlue()"
});
formatter.result({
  "duration": 2931764100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.selectASize()"
});
formatter.result({
  "duration": 4999655200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.selectQuantifyAsP1(String)"
});
formatter.result({
  "duration": 144239400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickButtonOfAddToCart()"
});
formatter.result({
  "duration": 266597900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyMyShoppingSuccessfull()"
});
formatter.result({
  "duration": 3422847800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickContinueShopping()"
});
formatter.result({
  "duration": 328609700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 63
    }
  ],
  "location": "StepDefinitions.verifyTheNumberDisplayedInRightTopOfTheCartImageIsP1(String)"
});
formatter.result({
  "duration": 2567438100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "reviewGoodsInCart (\u003chiptest-uid\u003e)",
  "description": "",
  "id": "user-buys-goods-on-https://www.farmers.co.nz;reviewgoodsincart-(\u003chiptest-uid\u003e)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I added \"\u003cnumber\u003e\" goods to my cart at last signing in",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Sign In with my user name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click the cart image",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Verify the quantity of goods in pop-up page is \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "user-buys-goods-on-https://www.farmers.co.nz;reviewgoodsincart-(\u003chiptest-uid\u003e);",
  "rows": [
    {
      "cells": [
        "number",
        "expectedResult",
        "hiptest-uid"
      ],
      "line": 31,
      "id": "user-buys-goods-on-https://www.farmers.co.nz;reviewgoodsincart-(\u003chiptest-uid\u003e);;1"
    },
    {
      "cells": [
        "2",
        "99999",
        "uid:2e3c369d-6bf4-439c-a83f-83f7743211de"
      ],
      "line": 32,
      "id": "user-buys-goods-on-https://www.farmers.co.nz;reviewgoodsincart-(\u003chiptest-uid\u003e);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "reviewGoodsInCart (uid:2e3c369d-6bf4-439c-a83f-83f7743211de)",
  "description": "",
  "id": "user-buys-goods-on-https://www.farmers.co.nz;reviewgoodsincart-(\u003chiptest-uid\u003e);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I added \"2\" goods to my cart at last signing in",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Sign In with my user name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click the cart image",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Verify the quantity of goods in pop-up page is \"99999\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.iAddedP1GoodsToMyCartAtLastSigningIn(String)"
});
formatter.result({
  "duration": 277900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.signInWithMyUserName()"
});
formatter.result({
  "duration": 15553272700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickTheCartImage()"
});
formatter.result({
  "duration": 126048600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99999",
      "offset": 48
    }
  ],
  "location": "StepDefinitions.verifyTheQuantityOfGoodsInPopupPageIsP1(String)"
});
formatter.result({
  "duration": 2691997700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[99999]\u003e but was:\u003c[2]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step_definitions.Actionwords.tryAssertEquals(Actionwords.java:194)\r\n\tat step_definitions.Actionwords.verifyTheQuantityOfGoodsInPopupPageIsP1(Actionwords.java:374)\r\n\tat step_definitions.StepDefinitions.verifyTheQuantityOfGoodsInPopupPageIsP1(StepDefinitions.java:122)\r\n\tat ✽.Then Verify the quantity of goods in pop-up page is \"99999\"(User_buys_goods_on_httpswwwfarmersconz.feature:28)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "cancelGoodsInCart (\u003chiptest-uid\u003e)",
  "description": "",
  "id": "user-buys-goods-on-https://www.farmers.co.nz;cancelgoodsincart-(\u003chiptest-uid\u003e)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I added \"\u003cnumber\u003e\" goods to my cart at last signing in",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Sign In with my user name",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click the cart image",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Click Checkout in the pop-up page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify my shopping info of \"\u003cexpectedResult1\u003e\" is displayed on the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click Remove on the current page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Verify notification of \"\u003cexpectedResult2\u003e\" is displayed on the current page",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "user-buys-goods-on-https://www.farmers.co.nz;cancelgoodsincart-(\u003chiptest-uid\u003e);",
  "rows": [
    {
      "cells": [
        "number",
        "expectedResult1",
        "expectedResult2",
        "hiptest-uid"
      ],
      "line": 44,
      "id": "user-buys-goods-on-https://www.farmers.co.nz;cancelgoodsincart-(\u003chiptest-uid\u003e);;1"
    },
    {
      "cells": [
        "2",
        "Your Shopping Bag",
        "Your cart is currently empty.",
        "uid:babd24e3-93b3-491c-adcd-af440f99f63a"
      ],
      "line": 45,
      "id": "user-buys-goods-on-https://www.farmers.co.nz;cancelgoodsincart-(\u003chiptest-uid\u003e);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "cancelGoodsInCart (uid:babd24e3-93b3-491c-adcd-af440f99f63a)",
  "description": "",
  "id": "user-buys-goods-on-https://www.farmers.co.nz;cancelgoodsincart-(\u003chiptest-uid\u003e);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I added \"2\" goods to my cart at last signing in",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Sign In with my user name",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click the cart image",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Click Checkout in the pop-up page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify my shopping info of \"Your Shopping Bag\" is displayed on the current page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click Remove on the current page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Verify notification of \"Your cart is currently empty.\" is displayed on the current page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.iAddedP1GoodsToMyCartAtLastSigningIn(String)"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.signInWithMyUserName()"
});
formatter.result({
  "duration": 14566928600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickTheCartImage()"
});
formatter.result({
  "duration": 128484000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickCheckoutInThePopupPage()"
});
formatter.result({
  "duration": 2614818400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Shopping Bag",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.verifyMyShoppingInfoOfP1IsDisplayedOnTheCurrentPage(String)"
});
formatter.result({
  "duration": 1596149200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clickRemoveOnTheCurrentPage()"
});
formatter.result({
  "duration": 1977341500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your cart is currently empty.",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.verifyNotificationOfP1IsDisplayedOnTheCurrentPage(String)"
});
formatter.result({
  "duration": 5150658800,
  "status": "passed"
});
});
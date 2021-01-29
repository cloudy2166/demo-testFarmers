package com.example;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class StepDefinitions {
    public Actionwords actionwords = new Actionwords();

    @Given("^Open web page with URL$")
    public void openWebPageWithURL() {
        actionwords.openWebPageWithURL();
    }

    @When("^Click SIGN IN on the right top$")
    public void clickSIGNINOnTheRightTop() {
        actionwords.clickSIGNINOnTheRightTop();
    }

    @Then("^Verify the page for signing in is displayed$")
    public void verifyThePageForSigningInIsDisplayed() {
        actionwords.verifyThePageForSigningInIsDisplayed();
    }

    @When("^Input user name \"(.*)\"$")
    public void inputUserNameP1(String p1) {
        actionwords.inputUserNameP1(p1);
    }

    @When("^Input password \"(.*)\"$")
    public void inputPasswordP1(String p1) {
        actionwords.inputPasswordP1(p1);
    }

    @When("^Click Sign In button$")
    public void clickSignInButton() {
        actionwords.clickSignInButton();
    }

    @Then("^Verify my login is successful with \"(.*)\" and \"(.*)\"$")
    public void verifyMyLoginIsSuccessfulWithP1AndP2(String p1, String p2) {
        actionwords.verifyMyLoginIsSuccessfulWithP1AndP2(p1, p2);
    }

    @Then("^Verify my login is failed with \"(.*)\"$")
    public void verifyMyLoginIsFailedWithP1(String p1) {
        actionwords.verifyMyLoginIsFailedWithP1(p1);
    }

    @Given("^Sign In with my user name$")
    public void signInWithMyUserName() {
        actionwords.signInWithMyUserName();
    }

    @Given("^Move cusor to MEN of the main menu$")
    public void moveCusorToMENOfTheMainMenu() {
        actionwords.moveCusorToMENOfTheMainMenu();
    }

    @Given("^Click Jeans on the pop-up menu$")
    public void clickJeansOnThePopupMenu() {
        actionwords.clickJeansOnThePopupMenu();
    }

    @Given("^Choose brand \"(.*)\"$")
    public void chooseBrandP1(String p1) {
        actionwords.chooseBrandP1(p1);
    }

    @Then("^Verify all the jeans listed are \"(.*)\"$")
    public void verifyAllTheJeansListedAreP1(String p1) {
        actionwords.verifyAllTheJeansListedAreP1(p1);
    }

    @When("^Click Jack & Jones Glenn Slim Jean, Light Blue$")
    public void clickJackJonesGlennSlimJeanLightBlue() {
        actionwords.clickJackJonesGlennSlimJeanLightBlue();
    }

    @When("^Select a size$")
    public void selectASize() {
        actionwords.selectASize();
    }

    @When("^Select quantify as \"(.*)\"$")
    public void selectQuantifyAsP1(String p1) {
        actionwords.selectQuantifyAsP1(p1);
    }

    @When("^Click button of Add to cart$")
    public void clickButtonOfAddToCart() {
        actionwords.clickButtonOfAddToCart();
    }

    @Then("^Verify My Shopping successfull$")
    public void verifyMyShoppingSuccessfull() {
        actionwords.verifyMyShoppingSuccessfull();
    }

    @When("^Click Continue Shopping$")
    public void clickContinueShopping() {
        actionwords.clickContinueShopping();
    }

    @Then("^Verify the number displayed in right top of the cart image is \"(.*)\"$")
    public void verifyTheNumberDisplayedInRightTopOfTheCartImageIsP1(String p1) {
        actionwords.verifyTheNumberDisplayedInRightTopOfTheCartImageIsP1(p1);
    }

    @Given("^I added \"(.*)\" goods to my cart at last signing in$")
    public void iAddedP1GoodsToMyCartAtLastSigningIn(String p1) {
        actionwords.iAddedP1GoodsToMyCartAtLastSigningIn(p1);
    }

    @When("^Click the cart image$")
    public void clickTheCartImage() {
        actionwords.clickTheCartImage();
    }

    @Then("^Verify the quantity of goods in pop-up page is \"(.*)\"$")
    public void verifyTheQuantityOfGoodsInPopupPageIsP1(String p1) {
        actionwords.verifyTheQuantityOfGoodsInPopupPageIsP1(p1);
    }

    @When("^Click Checkout in the pop-up page$")
    public void clickCheckoutInThePopupPage() {
        actionwords.clickCheckoutInThePopupPage();
    }

    @Then("^Verify my shopping info of \"(.*)\" is displayed on the current page$")
    public void verifyMyShoppingInfoOfP1IsDisplayedOnTheCurrentPage(String p1) {
        actionwords.verifyMyShoppingInfoOfP1IsDisplayedOnTheCurrentPage(p1);
    }

    @When("^Click Remove on the current page$")
    public void clickRemoveOnTheCurrentPage() {
        actionwords.clickRemoveOnTheCurrentPage();
    }

    @Then("^Verify notification of \"(.*)\" is displayed on the current page$")
    public void verifyNotificationOfP1IsDisplayedOnTheCurrentPage(String p1) {
        actionwords.verifyNotificationOfP1IsDisplayedOnTheCurrentPage(p1);
    }
}
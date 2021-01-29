package step_definitions;

import static org.junit.Assert.assertEquals;

import javax.swing.JOptionPane;

public class test1 {
    public static Actionwords action1=new Actionwords();
    private static void tryAssertEquals (String expectedResult,String actualResult) {
    	try {
    		assertEquals(expectedResult,actualResult);
    	} catch (Error e) {
    		System.out.println(e);
    		//driver.close();
    	}
    }
    
	public static void main(String[] args) {

        action1.openWebPageWithURL();  
        action1.waiting(5);
        action1.openWebPageWithURL();  
//      action1.signInWithMyUserName();
//		action1.clickTheCartImage();
//		action1.clickCheckoutInThePopupPage();
//		action1.verifyMyShoppingInfoOfP1IsDisplayedOnTheCurrentPage("Your Shopping Bag");
//		action1.clickRemoveOnTheCurrentPage();
//		action1.verifyNotificationOfP1IsDisplayedOnTheCurrentPage("Your cart is currently empty.");
        System.out.println("THE END!");   
	
	  
	//action1.inputUserNameP1("cloudy2166@gmail.com");
	//action1.inputPasswordP1("noguess1");
	
	}

}

package TestRunner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith; 
@RunWith(Cucumber.class)
@CucumberOptions(
		features="features/", 
		glue= {"step_definitions"},
		format = {"html:target/cucumber", "json:target/cucumber.json"}
		) 
public class Runner {     
}
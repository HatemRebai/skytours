package com.cartridge.demo;





import javax.servlet.annotation.WebServlet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RequestMapping;






//@EntityScan(basePackages= {"com.cartridge.demo.entities"})
//@SpringBootApplication (scanBasePackages =  {"config" ,"entities" , "repositories" 
//, "services" , "servicesImpl" , "controller" })
//@Configuration
//@EntityScan(basePackages= {"com.cartridge.demo.entities"})
//@EnableAutoConfiguration
// @Configuration
// @WebServlet
//@ComponentScan
//@ServletComponentScan
@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.cartridge.demo.repositories")
@RequestMapping("/")
public class AgenceVoyageApplication extends SpringBootServletInitializer {

	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(AgenceVoyageApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(AgenceVoyageApplication.class, args);
	}
 
	
//	private static Class<AgenceVoyageApplication> agenceVoyageApplication = AgenceVoyageApplication.class;
	
/* private static SpringApplicationBuilder configureApplication(SpringApplicationBuilder builder) {
        return builder.sources(AgenceVoyageApplication.class).bannerMode(Banner.Mode.OFF);
  } */
	


}

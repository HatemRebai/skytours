package com.cartridge.demo.config;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Component
  public class CorsConfig    {

/*private final Logger log = LoggerFactory.getLogger(CorsConfig.class);

public CorsConfig() {
    log.info("SimpleCORSFilter init");
}

@Override
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
		throws IOException, ServletException {
			HttpServletRequest req = (HttpServletRequest) request;
			HttpServletResponse resp = (HttpServletResponse) response;
		
			resp.setHeader("Access-Control-Allow-Origin", req.getHeader("Origin"));
			resp.setHeader("Access-Control-Allow-Credentials", "true");
			resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
			resp.setHeader("Access-Control-Max-Age", "3600");
			resp.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
		
			chain.doFilter(req, resp);
	
}*/

  /* @Bean
	public WebMvcConfigurer getCorsConfiguration() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET" , "POST" , "PUT" , "DELETE")
                .allowedHeaders("http://localhost:9090/");
			}
		};
	}  
	*/
    
}

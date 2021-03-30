package com.cartridge.demo.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.cartridge.demo.entities.User;
import com.cartridge.demo.services.UserService;


@Component
public class Filter extends OncePerRequestFilter {
	@Value("${auth.header}")
	private String TOKEN_HEADER;
	@Autowired
	private UserService userService;
	@Autowired
	private GestionToken token_gen;
	
	

	    private static final Log LOG = LogFactory.getLog(Filter.class);


	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
     
		response.addHeader("Access-Control-Allow-Origin", "*");        
		final String token = request.getHeader(TOKEN_HEADER);
		final SecurityContext securityContext = SecurityContextHolder.getContext();
		
		if (token != null && securityContext.getAuthentication() == null) {
			String username = token_gen.getUserNameFromToken(token);
		      if (request.getHeader("Access-Control-Request-Method") != null && "OPTIONS".equals(request.getMethod())) {
		            LOG.trace("Sending Header....");
		            // CORS "pre-flight" request
		            response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
		            // response.addHeader("Access-Control-Allow-Headers", "Authorization");
		            response.addHeader("Access-Control-Allow-Headers", "Content-Type");
		            response.addHeader("Access-Control-Max-Age", "1");
		            
		    		if (username != null) {
						User user = userService.loadUserByUsername(username);
						if (token_gen.isTokenValid(token, user)) {
							UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user,
									null, user.getAuthorities());
							authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
							SecurityContextHolder.getContext().setAuthentication(authentication);
						}
					}
		        }
	
		}

		filterChain.doFilter(request, response);
	}
	
}
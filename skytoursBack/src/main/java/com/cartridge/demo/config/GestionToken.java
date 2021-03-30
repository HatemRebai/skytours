package com.cartridge.demo.config;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.cartridge.demo.entities.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;



@Component
public class GestionToken {
	@Value("${auth.expiration}")
	private Long TOKEN_VALIDITY = 604800L;
	@Value("${auth.secret}")
	private String TOKEN_SECRET;

	public String generateToken(User user) {
		String id=user.getId().toString();
	
		return Jwts.builder().setId(id).setSubject(user.getUsername()).setIssuedAt(new Date())
				.setExpiration(generateExpirationDate()).signWith(SignatureAlgorithm.HS512, TOKEN_SECRET).compact();
	}

	public String getUserNameFromToken(String token) {
		Claims claims = getClaims(token);
		return claims.getSubject();
	}
	public int getUserIdFromToken(String token) {
		Claims claims = getClaims(token);
		return Integer.parseInt(claims.getId());
	}

	private Date generateExpirationDate() {
		return new Date(System.currentTimeMillis() + TOKEN_VALIDITY * 1000);
	}

	public boolean isTokenValid(String token, User user) {
		String username = getUserNameFromToken(token);
		return (username.equals(user.getUsername()) && !isTokenExpired(token));
	}

	private boolean isTokenExpired(String token) {
		Date expiration = getClaims(token).getExpiration();
		return expiration.before(new Date());
	}

	private Claims getClaims(String token) {
		Claims claims;
		try {
			claims = Jwts.parser().setSigningKey(TOKEN_SECRET).parseClaimsJws(token).getBody();
		} catch (Exception ex) {
			claims = null;
		}

		return claims;
	}
}
package com.websystique.springboot.service;

import com.websystique.springboot.model.Auth;
import com.websystique.springboot.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("authService")
public class AuthServiceImpl implements AuthService{

	@Autowired
	UserService userService; //Service which will do all data retrieval/manipulation work

	public User findByLogin(String username, String password) {
		User user = userService.findByLogin(username, password);
		return user;
	}

	public Auth authenticate(String username, String password) {
		User user = findByLogin(username, password);
		if (user != null) {
			Auth auth = new Auth();
			auth.setUser(user);
			auth.setToken(user.getUserName().toString());
			return auth;
		}
		return null;
	}
}

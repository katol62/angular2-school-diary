package com.websystique.springboot.service;

import com.websystique.springboot.model.Auth;
import com.websystique.springboot.model.User;

public interface AuthService {

	public User findByLogin(String username, String password);
	public Auth authenticate(String username, String password);
}

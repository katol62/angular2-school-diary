package ru.schoolarlife.logic.service;

import ru.schoolarlife.logic.model.Auth;
import ru.schoolarlife.logic.model.User;

public interface AuthService {

	public User findByLogin(String username, String password);
	public Auth authenticate(String username, String password);
}

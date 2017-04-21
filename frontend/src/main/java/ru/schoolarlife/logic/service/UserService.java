package ru.schoolarlife.logic.service;


import java.util.List;

import ru.schoolarlife.logic.model.User;

public interface UserService {
	
	User findById(long id);
	
	User findByName(String name);

	User findByLogin(String username, String password);

	void saveUser(User user);
	
	void updateUser(User user);
	
	void deleteUserById(long id);

	List<User> findAllUsers();
	
	void deleteAllUsers();
	
	boolean isUserExist(User user);
	
}

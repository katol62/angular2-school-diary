package ru.schoolarlife.logic.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import ru.schoolarlife.logic.model.User;



@Service("userService")
public class UserServiceImpl implements UserService{
	
	private static final AtomicLong counter = new AtomicLong();
	
	private static List<User> users;
	
	static{
		users= populateDummyUsers();
	}

	public List<User> findAllUsers() {
		return users;
	}
	
	public User findById(long id) {
		for(User user : users){
			if(user.getId() == id){
				return user;
			}
		}
		return null;
	}
	
	public User findByName(String name) {
		for(User user : users){
			if(user.getUserName().equalsIgnoreCase(name)){
				return user;
			}
		}
		return null;
	}

	public User findByLogin(String username, String password) {
		for(User user : users){
			if(user.getUserName().equalsIgnoreCase(username) && user.getPassword().equalsIgnoreCase(password)){
				return user;
			}
		}
		return null;
	}


	public void saveUser(User user) {
		user.setId(counter.incrementAndGet());
		users.add(user);
	}

	public void updateUser(User user) {
		int index = users.indexOf(user);
		users.set(index, user);
	}

	public void deleteUserById(long id) {
		
		for (Iterator<User> iterator = users.iterator(); iterator.hasNext(); ) {
		    User user = iterator.next();
		    if (user.getId() == id) {
		        iterator.remove();
		    }
		}
	}

	public boolean isUserExist(User user) {
		return findByName(user.getUserName())!=null;
	}
	
	public void deleteAllUsers(){
		users.clear();
	}

	private static List<User> populateDummyUsers(){
		List<User> users = new ArrayList<User>();
		users.add(new User(counter.incrementAndGet(),"admin", "admin", "admin", "Иван", "Админов"));
		users.add(new User(counter.incrementAndGet(),"chief", "chief", "chief", "Петр", "Директоров"));
		users.add(new User(counter.incrementAndGet(),"teacher", "teacher", "teacher", "Василий", "Учителев"));
		users.add(new User(counter.incrementAndGet(),"parent", "parent", "parent", "Степан", "Родителев"));
		return users;
	}


}

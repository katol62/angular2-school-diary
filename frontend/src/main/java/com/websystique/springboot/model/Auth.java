package com.websystique.springboot.model;
	
public class Auth {

	private long id;

	private User user;
	private String token;

	public Auth(){}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Auth other = (Auth) obj;
		if (user.getId() != other.user.getId())
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Auth: User [id=" + user.getId() + ", username=" + user.getUserName() + ", password=" + user.getPassword()
				+ ", type=" + user.getType() + ", firstName=" + user.getFirstName() + ", lastName=" + user.getLastName() + "] Token [token = "+token+"]";
	}


}

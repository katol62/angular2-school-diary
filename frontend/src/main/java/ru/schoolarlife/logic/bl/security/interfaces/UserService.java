package ru.schoolarlife.logic.bl.security.interfaces;

import ru.schoolarlife.logic.bo.security.User;

/**
 * Created by victor on 01.11.16.
 */
public interface UserService {
    public void save(User user);

    public User findByEmail(String email);
}

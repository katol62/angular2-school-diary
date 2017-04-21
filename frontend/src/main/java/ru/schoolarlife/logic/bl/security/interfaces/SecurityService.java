package ru.schoolarlife.logic.bl.security.interfaces;

/**
 * Created by victor on 07.11.16.
 */
public interface SecurityService {
    String findLoggedInUsername();

    void autologin(String username, String password);
}

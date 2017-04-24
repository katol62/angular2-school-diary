package ru.schoolarlife.logic.bl.security;

import org.springframework.security.core.AuthenticationException;

/**
 * Created by victor on 23.04.17.
 */
public class UserNotActivatedException extends AuthenticationException {
    public UserNotActivatedException(String msg, Throwable t) {
        super(msg, t);
    }

    public UserNotActivatedException(String msg) {
        super(msg);
    }
}

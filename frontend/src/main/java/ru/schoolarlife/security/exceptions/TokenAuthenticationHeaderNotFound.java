package ru.schoolarlife.security.exceptions;

import org.springframework.security.core.AuthenticationException;

/**
 * Created by victor on 22.04.17.
 */
public class TokenAuthenticationHeaderNotFound extends AuthenticationException {
    public TokenAuthenticationHeaderNotFound(String msg, Throwable t) {
        super(msg, t);
    }
}

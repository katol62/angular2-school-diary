package ru.schoolarlife.security;

import org.springframework.security.authentication.AbstractAuthenticationToken;

import java.util.Collection;

/**
 * Created by victor on 22.04.17.
 */
public class TokenAuthentication extends AbstractAuthenticationToken {
    private final String token;

    public TokenAuthentication(String token) {
        super(null);
        this.token = token;
    }

    public TokenAuthentication(String token, Collection authorities) {
        super(authorities);
        this.token = token;
    }

    @Override
    public Object getCredentials() {
        return token.split(":")[1];
    }

    @Override
    public Object getPrincipal() {
        return token.split(":")[0];
    }

}

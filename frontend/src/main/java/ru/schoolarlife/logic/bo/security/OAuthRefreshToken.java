package ru.schoolarlife.logic.bo.security;

import javax.persistence.*;

/**
 * Created by victor on 23.04.17.
 */
@Entity
@Table(name = "oauth_refresh_token")
public class OAuthRefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    String token_id;

    @Lob
    @Column(length=100000)
    byte[] token;

    @Lob
    @Column(length=100000)
    byte[] authentication;


    public String getToken_id() {
        return token_id;
    }

    public void setToken_id(String token_id) {
        this.token_id = token_id;
    }

    public byte[] getToken() {
        return token;
    }

    public void setToken(byte[] token) {
        this.token = token;
    }

    public byte[] getAuthentication() {
        return authentication;
    }

    public void setAuthentication(byte[] authentication) {
        this.authentication = authentication;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

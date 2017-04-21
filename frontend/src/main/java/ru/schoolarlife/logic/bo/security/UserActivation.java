package ru.schoolarlife.logic.bo.security;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by victor on 11.11.16.
 */
@Entity
@Table(name = "useractivation")
public class UserActivation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY)
    @JoinTable(name = "user_id")
    private User user;

    @NotNull
    private String activationCode;

    public UserActivation() {
    }

    public UserActivation(User user, String activationCode) {
        this.user = user;
        this.activationCode = activationCode;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getActivationCode() {
        return activationCode;
    }

    public void setActivationCode(String activationCode) {
        this.activationCode = activationCode;
    }
}

package ru.schoolarlife.logic.bo.security;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import ru.schoolarlife.rest.controllers.json.View;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by victor on 01.11.16.
 */
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(View.Summary.class)
    private Long id;

    @NotNull
    @Size(min = 3, max = 80)
    @JsonView(View.Summary.class)
    private String email;

    @NotNull
    @Size(min = 2, max = 80)
    @JsonView(View.Summary.class)
    private String name;

    @JsonIgnore
    private String password;

    @Transient
    @JsonIgnore
    private String passwordConfirm;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id", referencedColumnName="ID"),
                            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName="ID"))
    @JsonIgnore
    private Set<Role> roles = new HashSet<Role>();

    @JsonView(View.Summary.class)
    private boolean active = false;

    @OneToOne(fetch=FetchType.LAZY, mappedBy="user")
    @JsonIgnore
    private UserActivation owner;

    public User() {
        int i = 0;
    }

    public User(String name) {
        this.name = name;
    }

    public User(User user) {
        setName(user.getName());
        setActive(user.isActive());
        setEmail(user.getEmail());
        setPassword(user.getPassword());
        setPasswordConfirm(user.getPasswordConfirm());
        setId(user.getId());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordConfirm() {
        return passwordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.passwordConfirm = passwordConfirm;
    }


    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}

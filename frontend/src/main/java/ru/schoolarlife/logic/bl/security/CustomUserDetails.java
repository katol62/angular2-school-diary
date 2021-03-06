package ru.schoolarlife.logic.bl.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;
import ru.schoolarlife.logic.bo.security.User;

import java.util.Collection;
import java.util.List;

/**
 * Created by victor on 17.11.16.
 */
public class CustomUserDetails extends User implements UserDetails {

    private static final long serialVersionUID = 1L;
    private List<String> userRoles;

    public CustomUserDetails(User user,List<String> userRoles){
        super(user);
        this.setEmail(user.getEmail());
        this.userRoles=userRoles;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String roles= StringUtils.collectionToCommaDelimitedString(userRoles);
        return AuthorityUtils.commaSeparatedStringToAuthorityList(roles);
    }

    @Override
    public String getUsername() {
        return super.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return super.isActive();
    }
}

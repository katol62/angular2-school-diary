package ru.schoolarlife.logic.bl.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.security.Role;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.model.dao.repositories.security.RoleRepository;
import ru.schoolarlife.logic.model.dao.repositories.security.UserRepository;

import java.util.*;

/**
 * Created by victor on 17.11.16.
 */
@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public CustomUserDetailsService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user=userRepository.findByEmail(username);
        if(null == user){
            throw new UsernameNotFoundException("No user present with email: "+username);
        }else{
            if(user.getRoles().size() > 0)
            {
                List<String> userRoles = new ArrayList<String>();
                for (Role role : user.getRoles()) {
                    userRoles.add(role.getName());
                }
                return new CustomUserDetails(user,userRoles);
            }
            else
            {
                throw new AuthenticationCredentialsNotFoundException("User with email: " + username + " doesn't has any roles");
            }
        }
    }
}

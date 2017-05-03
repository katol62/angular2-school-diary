package ru.schoolarlife.rest.controllers.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.model.dao.services.UserService;

/**
 * Created by victor on 28.04.17.
 */
public abstract class BaseAdminRestController {

    @Autowired
    UserService userService;

    boolean isCurrentUsersAllowed()
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return true;
    }

    User getCurrentUser()
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        org.springframework.security.core.userdetails.User userPrincipal = (org.springframework.security.core.userdetails.User) auth.getPrincipal();
        User user = userService.findByEmail(userPrincipal.getUsername());
        return user;
    }
}

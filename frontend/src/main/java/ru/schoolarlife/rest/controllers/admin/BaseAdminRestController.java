package ru.schoolarlife.rest.controllers.admin;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * Created by victor on 28.04.17.
 */
public abstract class BaseAdminRestController {
    boolean isCurrentUsersAllowed()
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return true;
    }
}

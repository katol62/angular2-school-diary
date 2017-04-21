package ru.schoolarlife.logic.bl.security.interfaces;

import ru.schoolarlife.logic.bo.security.Role;

/**
 * Created by victor on 07.11.16.
 */
public interface RoleService {
    public Role findByName(String name);
}

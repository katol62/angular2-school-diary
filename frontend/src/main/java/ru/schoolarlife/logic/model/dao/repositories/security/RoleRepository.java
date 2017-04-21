package ru.schoolarlife.logic.model.dao.repositories.security;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.security.Role;
import ru.schoolarlife.logic.bo.security.User;

/**
 * Created by victor on 07.11.16.
 */
public interface RoleRepository  extends JpaRepository<Role, Long> {
    Role findByName(String name);
}

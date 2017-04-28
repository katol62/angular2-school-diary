package ru.schoolarlife.logic.model.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.security.Role;
import ru.schoolarlife.logic.model.dao.repositories.security.RoleRepository;

import java.util.List;

/**
 * Created by victor on 28.04.17.
 */
@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public List<Role> getAllRoles()
    {
        return roleRepository.findAll();
    }
}

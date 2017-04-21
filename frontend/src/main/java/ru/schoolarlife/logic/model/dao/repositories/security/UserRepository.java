package ru.schoolarlife.logic.model.dao.repositories.security;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.security.User;

import java.util.List;

/**
 * Created by victor on 06.11.16.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}

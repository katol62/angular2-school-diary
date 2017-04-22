package ru.schoolarlife.logic.model.dao.repositories.security;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.schoolarlife.logic.bo.security.User;

import java.util.List;

/**
 * Created by victor on 06.11.16.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    User findById(long id);
}

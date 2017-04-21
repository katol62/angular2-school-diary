package ru.schoolarlife.logic.model.dao.repositories.security;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.security.UserActivation;

/**
 * Created by victor on 21.11.16.
 */
public interface UserActivationRepository extends JpaRepository<UserActivation, Long> {
    UserActivation findByActivationCode(String activationCode);
}

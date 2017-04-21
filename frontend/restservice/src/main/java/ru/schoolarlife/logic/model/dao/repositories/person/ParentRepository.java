package ru.schoolarlife.logic.model.dao.repositories.person;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.person.Parent;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface ParentRepository extends JpaRepository<Parent, Long> {
    Set<Parent> findByFirstName(String firstName);
    Set<Parent> findByMiddleName(String middleName);
    Set<Parent> findByLastName(String lastName);


}

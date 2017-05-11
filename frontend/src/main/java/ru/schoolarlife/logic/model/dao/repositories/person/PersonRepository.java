package ru.schoolarlife.logic.model.dao.repositories.person;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.person.Person;

/**
 * Created by victor on 28.04.17.
 */
public interface PersonRepository extends JpaRepository<Person, Long> {
    Person findByEmail(String email);
    Person findByUserId(long userId);
}

package ru.schoolarlife.logic.model.dao.repositories.person;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.person.Teacher;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    Set<Teacher> findByFirstName(String firstName);
    Set<Teacher> findByMiddleName(String middleName);
    Set<Teacher> findByLastName(String lastName);
}

package ru.schoolarlife.logic.model.dao.repositories.person;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.person.Student;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface StudentRepository   extends JpaRepository<Student, Long> {
    Set<Student> findByFirstName(String firstName);
    Set<Student> findByMiddleName(String middleNameName);
    Set<Student> findByLastName(String lastName);
}

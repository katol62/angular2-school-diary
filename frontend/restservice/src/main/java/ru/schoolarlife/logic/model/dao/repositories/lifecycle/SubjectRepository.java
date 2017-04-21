package ru.schoolarlife.logic.model.dao.repositories.lifecycle;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.lifecycle.Subject;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface SubjectRepository extends JpaRepository<Subject, Long> {
    Set<Subject> findAllByName(String name);
}

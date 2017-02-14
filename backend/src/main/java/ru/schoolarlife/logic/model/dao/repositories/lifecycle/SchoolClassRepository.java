package ru.schoolarlife.logic.model.dao.repositories.lifecycle;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.lifecycle.SchoolClass;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface SchoolClassRepository extends JpaRepository<SchoolClass, Long> {
    Set<SchoolClass> findAllByName(String name);
}

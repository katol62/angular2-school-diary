package ru.schoolarlife.logic.model.dao.repositories.lifecycle;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.lifecycle.Absences;

/**
 * Created by victor on 11.11.16.
 */
public interface AbsencesRepository extends JpaRepository<Absences, Long> {
}

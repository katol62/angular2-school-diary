package ru.schoolarlife.logic.model.dao.repositories.lifecycle;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.lifecycle.Assessment;

/**
 * Created by victor on 11.11.16.
 */
public interface AssessmentRepository extends JpaRepository<Assessment, Long> {
}

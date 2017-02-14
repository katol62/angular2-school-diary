package ru.schoolarlife.logic.bl.lifecycle.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bl.lifecycle.interfaces.AssessmentService;
import ru.schoolarlife.logic.bo.lifecycle.Assessment;
import ru.schoolarlife.logic.model.dao.repositories.lifecycle.AssessmentRepository;

/**
 * Created by victor on 11.11.16.
 */
@Service
public class AssessmentServiceImpl implements AssessmentService {

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Override
    public Assessment save(Assessment assessment) {
        return assessmentRepository.save(assessment);
    }
}

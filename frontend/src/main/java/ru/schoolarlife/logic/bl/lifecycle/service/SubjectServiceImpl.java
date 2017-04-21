package ru.schoolarlife.logic.bl.lifecycle.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bl.lifecycle.interfaces.SubjectService;
import ru.schoolarlife.logic.bo.lifecycle.Subject;
import ru.schoolarlife.logic.model.dao.repositories.lifecycle.SubjectRepository;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
@Service
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    private SubjectRepository subjectRepository;

    @Override
    public Subject save(Subject subject) {
        return subjectRepository.save(subject);
    }

    @Override
    public Set<Subject> findAllByName(String name) {
        return subjectRepository.findAllByName(name);
    }
}

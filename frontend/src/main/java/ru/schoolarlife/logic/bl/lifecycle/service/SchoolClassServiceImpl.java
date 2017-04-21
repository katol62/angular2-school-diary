package ru.schoolarlife.logic.bl.lifecycle.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bl.lifecycle.interfaces.SchoolClassService;
import ru.schoolarlife.logic.bo.lifecycle.SchoolClass;
import ru.schoolarlife.logic.model.dao.repositories.lifecycle.SchoolClassRepository;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
@Service
public class SchoolClassServiceImpl implements SchoolClassService {

    @Autowired
    private SchoolClassRepository schoolClassRepository;

    @Override
    public SchoolClass save(SchoolClass schoolClass) {
        return schoolClassRepository.save(schoolClass);
    }

    @Override
    public Set<SchoolClass> findAllByName(String name) {
        return schoolClassRepository.findAllByName(name);
    }
}

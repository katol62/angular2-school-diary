package ru.schoolarlife.logic.bl.lifecycle.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bl.lifecycle.interfaces.AbsencesService;
import ru.schoolarlife.logic.bo.lifecycle.Absences;
import ru.schoolarlife.logic.model.dao.repositories.lifecycle.AbsencesRepository;

/**
 * Created by victor on 11.11.16.
 */
@Service
public class AbsencesServiceImpl implements AbsencesService {

    @Autowired
    private AbsencesRepository absencesRepository;

    @Override
    public Absences save(Absences absences) {
        return absencesRepository.save(absences);
    }
}

package ru.schoolarlife.logic.bl.person.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bl.person.interfaces.ParentService;
import ru.schoolarlife.logic.bo.person.Parent;
import ru.schoolarlife.logic.model.dao.repositories.person.ParentRepository;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
@Service
public class ParentServiceImpl implements ParentService {

    @Autowired
    ParentRepository parentRepository;


    @Override
    public Parent save(Parent parent) {
        return parentRepository.save(parent);
    }

    @Override
    public Set<Parent> findAllByFirstName(String firstName) {
        return parentRepository.findByFirstName(firstName);
    }

    @Override
    public Set<Parent> findAllByMiddleName(String middleName) {
        return parentRepository.findByMiddleName(middleName);
    }

    @Override
    public Set<Parent> findAllByLastName(String lastName) {
        return parentRepository.findByLastName(lastName);
    }
}

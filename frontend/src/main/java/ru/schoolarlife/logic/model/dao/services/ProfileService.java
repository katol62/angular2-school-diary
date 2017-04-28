package ru.schoolarlife.logic.model.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.person.Person;
import ru.schoolarlife.logic.model.dao.repositories.person.PersonRepository;

import java.util.List;

/**
 * Created by victor on 28.04.17.
 */
@Service
public class ProfileService {

    @Autowired
    PersonRepository personRepository;

    public List<Person> getAllProfiles()
    {
        return personRepository.findAll();
    }

    public Person getOneById(Long id)
    {
        return personRepository.findOne(id);
    }

    public Person findByEmail(String email)
    {
        return personRepository.findByEmail(email);
    }

    public Person save(Person person)
    {
        return personRepository.save(person);
    }

    public void delete(Person person)
    {
        personRepository.delete(person);
    }

    public void deleteById(Long id)
    {
        personRepository.delete(id);
    }

}

package ru.schoolarlife.logic.model.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.person.Parent;
import ru.schoolarlife.logic.bo.person.Person;
import ru.schoolarlife.logic.bo.person.Student;
import ru.schoolarlife.logic.bo.person.Teacher;
import ru.schoolarlife.logic.model.dao.repositories.person.ParentRepository;
import ru.schoolarlife.logic.model.dao.repositories.person.PersonRepository;
import ru.schoolarlife.logic.model.dao.repositories.person.StudentRepository;
import ru.schoolarlife.logic.model.dao.repositories.person.TeacherRepository;

import java.util.List;

/**
 * Created by victor on 28.04.17.
 */
@Service
public class ProfileService {

    @Autowired
    PersonRepository personRepository;

    @Autowired
    TeacherRepository teacherRepository;

    @Autowired
    ParentRepository parentRepository;

    @Autowired
    StudentRepository studentRepository;

    public List<Person> getAllProfiles()
    {
        return personRepository.findAll();
    }

    public Person getOneById(Long id)
    {
        return personRepository.findOne(id);
    }

    public Person getOneByUserId(Long id)
    {
        return personRepository.findByUserId(id);
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

    public Teacher saveTeacher(Teacher teacher)
    {
        return teacherRepository.save(teacher);
    }

    public Parent saveParent(Parent parent)
    {
        return parentRepository.save(parent);
    }

    public Student saveStudent(Student student)
    {
        return studentRepository.save(student);
    }
}

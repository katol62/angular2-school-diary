package ru.schoolarlife.logic.bl.person.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bl.person.interfaces.StudentService;
import ru.schoolarlife.logic.bo.person.Student;
import ru.schoolarlife.logic.model.dao.repositories.person.StudentRepository;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student save(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Set<Student> findAllByFirstName(String firstName) {
        return studentRepository.findByFirstName(firstName);
    }

    @Override
    public Set<Student> findAllByMiddleName(String middleName) {
        return studentRepository.findByMiddleName(middleName);
    }

    @Override
    public Set<Student> findAllByLastName(String lastName) {
        return studentRepository.findByLastName(lastName);
    }
}

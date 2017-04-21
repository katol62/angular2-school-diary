package ru.schoolarlife.logic.bl.person.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bl.person.interfaces.TeacherService;
import ru.schoolarlife.logic.bo.person.Teacher;
import ru.schoolarlife.logic.model.dao.repositories.person.TeacherRepository;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    TeacherRepository teacherRepository;

    @Override
    public Teacher save(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    @Override
    public Set<Teacher> findAllByFirstName(String firstName) {
        return teacherRepository.findByFirstName(firstName);
    }

    @Override
    public Set<Teacher> findAllByMiddleName(String middleName) {
        return teacherRepository.findByMiddleName(middleName);
    }

    @Override
    public Set<Teacher> findAllByLastName(String lastName) {
        return teacherRepository.findByLastName(lastName);
    }
}

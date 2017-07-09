package ru.schoolarlife.logic.model.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.person.Teacher;
import ru.schoolarlife.logic.model.dao.repositories.person.TeacherRepository;

import java.util.List;
import java.util.Set;

/**
 * Created by victor on 09.07.17.
 */
@Service
public class TeacherService {

    @Autowired
    TeacherRepository teacherRepository;
    public List<Teacher> getAllTeachers()
    {
        return teacherRepository.findAll();
    }

    public Teacher getOneById(Long id)
    {
        return teacherRepository.findOne(id);
    }

    public Set<Teacher> getAllTeachersForSchool(Long schoolId)
    {
        return teacherRepository.findBySchoolId(schoolId);
    }

    public Set<Teacher> findByFirstName(String firstName){ return teacherRepository.findByFirstName(firstName); }

    public Set<Teacher> findByMiddleName(String middleName){ return teacherRepository.findByMiddleName(middleName); }

    public Set<Teacher> findByLastName(String lastName){ return teacherRepository.findByLastName(lastName); }

    public Teacher save(Teacher teacher)
    {
        return teacherRepository.save(teacher);
    }

    public void delete(Teacher teacher)
    {
        teacherRepository.delete(teacher);
    }

    public void deleteById(Long id)
    {
        teacherRepository.delete(id);
    }
}

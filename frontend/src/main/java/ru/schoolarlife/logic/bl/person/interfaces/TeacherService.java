package ru.schoolarlife.logic.bl.person.interfaces;

import ru.schoolarlife.logic.bo.person.Teacher;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface TeacherService {

    public Teacher save(Teacher teacher);

    public Set<Teacher> findAllByFirstName(String firstName);
    public Set<Teacher> findAllByMiddleName(String middleName);
    public Set<Teacher> findAllByLastName(String lastName);
}

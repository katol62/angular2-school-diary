package ru.schoolarlife.logic.bl.person.interfaces;


import ru.schoolarlife.logic.bo.person.Student;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface StudentService {
    public Student save(Student student);

    public Set<Student> findAllByFirstName(String firstName);
    public Set<Student> findAllByMiddleName(String middleName);
    public Set<Student> findAllByLastName(String lastName);
}

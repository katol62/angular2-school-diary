package ru.schoolarlife.logic.bo.lifecycle;

import ru.schoolarlife.logic.bo.person.Teacher;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@Entity
@Table(name = "subject")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String name;

    @ManyToMany(mappedBy="subjects")
    private Set<Teacher> teachers;

    @ManyToMany(mappedBy="subjects")
    private Set<SchoolClass> schoolClasses;

    public Subject() {
    }

    public Subject(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(Set<Teacher> teachers) {
        this.teachers = teachers;
    }

    public Set<SchoolClass> getSchoolClasses() {
        return schoolClasses;
    }

    public void setSchoolClasses(Set<SchoolClass> schoolClasses) {
        this.schoolClasses = schoolClasses;
    }
}

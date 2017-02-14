package ru.schoolarlife.logic.bo.person;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@SuppressWarnings("PMD")
@Entity
@Table(name = "parent")
public class Parent extends Person {

    @ManyToMany
    @JoinTable(name = "parent_student", joinColumns = @JoinColumn(name = "parent_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "student_id", referencedColumnName = "id"))
    private Set<Student> students;

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

}

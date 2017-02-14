package ru.schoolarlife.logic.bo.person;

import ru.schoolarlife.logic.bo.lifecycle.Subject;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@SuppressWarnings("PMD")
@Entity
@Table(name = "teacher")
public class Teacher extends Person {

    @ManyToMany
    @JoinTable(
            name="teacher_subject",
            joinColumns=@JoinColumn(name="teacher_id", referencedColumnName="id"),
            inverseJoinColumns=@JoinColumn(name="subject_id", referencedColumnName="id"))
    private Set<Subject> subjects;

}

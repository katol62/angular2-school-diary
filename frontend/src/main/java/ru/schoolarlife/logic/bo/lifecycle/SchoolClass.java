package ru.schoolarlife.logic.bo.lifecycle;

import ru.schoolarlife.logic.bo.person.Student;
import ru.schoolarlife.logic.bo.person.Teacher;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@Entity
@Table(name = "schoolclass")
public class SchoolClass {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;

    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="curator_id")
    private Teacher curator;

    @OneToMany(mappedBy="schoolClass")
    private Set<Student> students;

    @ManyToMany
    @JoinTable(
            name="class_subject",
            joinColumns=@JoinColumn(name="class_id", referencedColumnName="id"),
            inverseJoinColumns=@JoinColumn(name="subject_id", referencedColumnName="id"))
    private Set<Subject> subjects;

    public SchoolClass() {
    }

    public SchoolClass(long id, String name, Teacher curator) {
        this.id = id;
        this.name = name;
        this.curator = curator;
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

    public Teacher getCurator() {
        return curator;
    }

    public void setCurator(Teacher curator) {
        this.curator = curator;
    }

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    public Set<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }
}

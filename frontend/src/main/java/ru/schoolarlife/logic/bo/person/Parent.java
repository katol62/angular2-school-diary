package ru.schoolarlife.logic.bo.person;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@SuppressWarnings("PMD")
@Entity
@Table(name = "parent")
public class Parent extends Person {

    public Parent() {
    }

    public Parent(Person person) {
        this.setId(person.getId());
        this.setUserId(person.getUserId());
        this.setAddress(person.getAddress());
        this.setPhone(person.getPhone());
        this.setFirstName(person.getFirstName());
        this.setMiddleName(person.getMiddleName());
        this.setLastName(person.getLastName());
        this.setAge(person.getAge());
        this.setBirthDate(person.getBirthDate());
        this.setEmail(person.getEmail());
        this.setGender(person.getGender());
        this.setLogoImage(person.getLogoImage());
    }

    @ManyToMany
    @JoinTable(name = "parent_student", joinColumns = @JoinColumn(name = "parent_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "student_id", referencedColumnName = "id"))
    @JsonIgnore
    private Set<Student> students;

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

}

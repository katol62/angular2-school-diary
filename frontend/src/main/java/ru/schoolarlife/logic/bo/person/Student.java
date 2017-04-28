package ru.schoolarlife.logic.bo.person;

import com.fasterxml.jackson.annotation.JsonIgnore;
import ru.schoolarlife.logic.bo.lifecycle.SchoolClass;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@SuppressWarnings("PMD")
@Entity
@Table(name = "student")
public class Student extends Person {

    public Student() {
    }

    public Student(Person person) {
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

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="class_id")
    private SchoolClass schoolClass;

    @ManyToMany(mappedBy="students")
    @JsonIgnore
    private Set<Parent> parents;

    public SchoolClass getSchoolClass() {
        return schoolClass;
    }

    public void setSchoolClass(SchoolClass schoolClass) {
        this.schoolClass = schoolClass;
    }

    public Set<Parent> getParents() {
        return parents;
    }

    public void setParents(Set<Parent> parents) {
        this.parents = parents;
    }
}

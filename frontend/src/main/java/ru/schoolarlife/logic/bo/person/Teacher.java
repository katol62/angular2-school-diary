package ru.schoolarlife.logic.bo.person;

import com.fasterxml.jackson.annotation.JsonView;
import ru.schoolarlife.logic.bo.lifecycle.Subject;
import ru.schoolarlife.logic.bo.school.School;
import ru.schoolarlife.logic.util.json.View;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@SuppressWarnings("PMD")
@Entity
@Table(name = "teacher")
public class Teacher extends Person {

    @NotNull
    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="school_id")
    @JsonView(View.Summary.class)
    School school;

    public Teacher() {
    }

    public Teacher(Person person) {
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
    @JoinTable(
            name="teacher_subject",
            joinColumns=@JoinColumn(name="teacher_id", referencedColumnName="id"),
            inverseJoinColumns=@JoinColumn(name="subject_id", referencedColumnName="id"))
    private Set<Subject> subjects;

}

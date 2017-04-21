package ru.schoolarlife.logic.bo.person;

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

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="class_id")
    private SchoolClass schoolClass;

    @ManyToMany(mappedBy="students")
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

package ru.schoolarlife.logic.bo.school;

import ru.schoolarlife.logic.bo.person.Teacher;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@Entity
@Table(name = "schoolbuilding")
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String name;

    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="principal_id")
    private Teacher principal;

    @OneToMany(mappedBy="school")
    private Set<SchoolBuilding> schoolBuildings;

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

    public Teacher getPrincipal() {
        return principal;
    }

    public void setPrincipal(Teacher principal) {
        this.principal = principal;
    }

    public Set<SchoolBuilding> getSchoolBuildings() {
        return schoolBuildings;
    }

    public void setSchoolBuildings(Set<SchoolBuilding> schoolBuildings) {
        this.schoolBuildings = schoolBuildings;
    }
}

package ru.schoolarlife.logic.bo.schedule;

import ru.schoolarlife.logic.bo.school.School;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@Entity
@Table(name = "schedule")
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private int year;

    @NotNull
    private int quarter;

    @NotNull
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="school_id")
    private School school;

    @OneToMany(mappedBy="schedule")
    private Set<Week> weeks;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getQuarter() {
        return quarter;
    }

    public void setQuarter(int quarter) {
        this.quarter = quarter;
    }

    public School getSchool() {
        return school;
    }

    public void setSchool(School school) {
        this.school = school;
    }

    public Set<Week> getWeeks() {
        return weeks;
    }

    public void setWeeks(Set<Week> weeks) {
        this.weeks = weeks;
    }
}

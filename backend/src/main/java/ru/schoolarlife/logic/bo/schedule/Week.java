package ru.schoolarlife.logic.bo.schedule;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@Entity
@Table(name = "week")
public class Week {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private int weekIndex;

    @NotNull
    private Date startDate;

    @NotNull
    private Date endDate;

    @OneToMany(mappedBy="week")
    private Set<Day> days;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="schedule_id")
    private Schedule schedule;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getWeekIndex() {
        return weekIndex;
    }

    public void setWeekIndex(int week_index) {
        this.weekIndex = week_index;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Set<Day> getDays() {
        return days;
    }

    public void setDays(Set<Day> days) {
        this.days = days;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }
}

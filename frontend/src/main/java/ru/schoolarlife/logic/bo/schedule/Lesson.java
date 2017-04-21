package ru.schoolarlife.logic.bo.schedule;

import ru.schoolarlife.logic.bo.lifecycle.Absences;
import ru.schoolarlife.logic.bo.lifecycle.Assessment;
import ru.schoolarlife.logic.bo.lifecycle.Subject;
import ru.schoolarlife.logic.bo.person.Teacher;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@Entity
@Table(name = "lesson")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private int lessonIndex;

    @NotNull
    private LocalDateTime startTime;

    @NotNull
    private LocalDateTime endTime;

    @NotNull
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="subject_id")
    private Subject subject;

    @NotNull
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="teacher_id")
    private Teacher teacher;

    @OneToMany(mappedBy="lesson")
    private Set<Assessment> assessments;

    @OneToMany(mappedBy="lesson")
    private Set<Absences> absences;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="day_id")
    private Day day;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getLessonIndex() {
        return lessonIndex;
    }

    public void setLessonIndex(int lessonIndex) {
        this.lessonIndex = lessonIndex;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Set<Assessment> getAssessments() {
        return assessments;
    }

    public void setAssessments(Set<Assessment> assessments) {
        this.assessments = assessments;
    }

    public Set<Absences> getAbsences() {
        return absences;
    }

    public void setAbsences(Set<Absences> absences) {
        this.absences = absences;
    }

    public Day getDay() {
        return day;
    }

    public void setDay(Day day) {
        this.day = day;
    }
}

package ru.schoolarlife.logic.bo.lifecycle;

import ru.schoolarlife.logic.bo.person.Student;
import ru.schoolarlife.logic.bo.person.Teacher;
import ru.schoolarlife.logic.bo.schedule.Lesson;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by victor on 08.11.16.
 */
@Entity
@Table(name = "absences")
public class Absences {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="subject_id")
    private Subject subject;

    @NotNull
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="student_id")
    private Student student;

    @NotNull
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="teacher_id")
    private Teacher teacher;

    @NotNull
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="lesson_id")
    private Lesson lesson;

    @NotNull
    private String reason;

    public Absences() {
    }

    public Absences(long id, Subject subject, Student student, Teacher teacher, Lesson lesson, String reason) {
        this.id = id;
        this.subject = subject;
        this.student = student;
        this.teacher = teacher;
        this.lesson = lesson;
        this.reason = reason;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}

package ru.schoolarlife.logic.bl.lifecycle.interfaces;

import ru.schoolarlife.logic.bo.lifecycle.Subject;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface SubjectService {
    public Subject save(Subject subject);

    public Set<Subject> findAllByName(String name);
}

package ru.schoolarlife.logic.bl.lifecycle.interfaces;

import ru.schoolarlife.logic.bo.lifecycle.SchoolClass;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface SchoolClassService {
    public SchoolClass save(SchoolClass schoolClass);

    public Set<SchoolClass> findAllByName(String name);
}

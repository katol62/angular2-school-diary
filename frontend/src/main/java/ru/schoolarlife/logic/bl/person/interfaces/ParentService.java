package ru.schoolarlife.logic.bl.person.interfaces;

import ru.schoolarlife.logic.bo.person.Parent;

import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
public interface ParentService {

    public Parent save(Parent parent);

    public Set<Parent> findAllByFirstName(String firstName);
    public Set<Parent> findAllByMiddleName(String middleName);
    public Set<Parent> findAllByLastName(String lastName);
}

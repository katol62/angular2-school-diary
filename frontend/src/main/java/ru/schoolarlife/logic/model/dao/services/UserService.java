package ru.schoolarlife.logic.model.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.person.Person;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.model.dao.repositories.security.UserRepository;

import java.util.List;

/**
 * Created by victor on 28.04.17.
 */
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    public User getOneById(Long id)
    {
        return userRepository.findOne(id);
    }

    public User findByEmail(String email)
    {
        return userRepository.findByEmail(email);
    }

    public User save(User user)
    {
        return userRepository.save(user);
    }

    public void delete(User user)
    {
        userRepository.delete(user);
    }

    public void deleteById(Long id)
    {
        userRepository.delete(id);
    }
}

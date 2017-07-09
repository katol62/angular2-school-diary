package ru.schoolarlife.logic.model.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.unsecure.GameCategory;
import ru.schoolarlife.logic.model.dao.repositories.unsecure.GameCategoryRepository;

import java.util.List;

/**
 * Created by victor on 09.07.17.
 */
@Service
public class GameCategoryService {
    @Autowired
    GameCategoryRepository gameCategoryRepository;

    public List<GameCategory> getAllGameCategories()
    {
        return gameCategoryRepository.findAll();
    }

    public GameCategory getOne(Long id)
    {
        return gameCategoryRepository.findOne(id);
    }

    public GameCategory save(GameCategory gameCategory)
    {
        return gameCategoryRepository.save(gameCategory);
    }

    public void delete(Long id)
    {
        gameCategoryRepository.delete(id);
    }
}

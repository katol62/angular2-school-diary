package ru.schoolarlife.logic.model.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.unsecure.Game;
import ru.schoolarlife.logic.model.dao.repositories.unsecure.GameRepositiry;

import java.util.List;

/**
 * Created by victor on 03.05.17.
 */
@Service
public class GameService {

    @Autowired
    GameRepositiry gameRepositiry;

    public List<Game> getAllPublicGames()
    {
        return gameRepositiry.findAll();
    }

    public Game getOne(Long id)
    {
        return gameRepositiry.findOne(id);
    }

    public Game save(Game game)
    {
        return gameRepositiry.save(game);
    }

    public void delete(Long id)
    {
        gameRepositiry.delete(id);
    }
}

package ru.schoolarlife.logic.model.dao.repositories.unsecure;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.unsecure.Game;

import java.util.Set;

/**
 * Created by victor on 03.05.17.
 */
public interface GameRepositiry extends JpaRepository<Game, Long> {
    Set<Game> findByCategoryId(Long categoryId);
}

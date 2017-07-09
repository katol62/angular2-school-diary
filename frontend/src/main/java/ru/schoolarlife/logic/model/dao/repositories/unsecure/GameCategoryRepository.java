package ru.schoolarlife.logic.model.dao.repositories.unsecure;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.unsecure.GameCategory;

/**
 * Created by victor on 09.07.17.
 */
public interface GameCategoryRepository extends JpaRepository<GameCategory, Long> {
}

package ru.schoolarlife.logic.model.dao.repositories.unsecure;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.unsecure.PublicNews;

/**
 * Created by victor on 03.05.17.
 */
public interface PublicNewsRepository extends JpaRepository<PublicNews, Long> {
}

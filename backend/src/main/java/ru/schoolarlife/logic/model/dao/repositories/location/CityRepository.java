package ru.schoolarlife.logic.model.dao.repositories.location;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.location.City;

/**
 * Created by victor on 11.11.16.
 */
public interface CityRepository extends JpaRepository<City, Long> {
    City findByName(String cityName);
}

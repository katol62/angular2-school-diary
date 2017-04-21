package ru.schoolarlife.logic.model.dao.repositories.location;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.location.Country;

/**
 * Created by victor on 11.11.16.
 */
public interface CountryRepository extends JpaRepository<Country, Long> {
    Country findByName(String countryName);
}

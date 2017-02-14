package ru.schoolarlife.logic.model.dao.repositories.location;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.schoolarlife.logic.bo.location.Address;

/**
 * Created by victor on 11.11.16.
 */
public interface AddressRepository extends JpaRepository<Address, Long> {
}

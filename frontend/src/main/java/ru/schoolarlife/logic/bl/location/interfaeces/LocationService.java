package ru.schoolarlife.logic.bl.location.interfaeces;

import ru.schoolarlife.logic.bo.location.Address;
import ru.schoolarlife.logic.bo.location.City;
import ru.schoolarlife.logic.bo.location.Country;

/**
 * Created by victor on 11.11.16.
 */
public interface LocationService {
    public Address saveAddress(Address address);

    public Country saveCountry(Country country);
    public Country findCountryByName(String countryName);

    public City saveCity(City city);
    public City findCityByName(String cityName);
}

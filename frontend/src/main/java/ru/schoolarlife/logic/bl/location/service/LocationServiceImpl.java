package ru.schoolarlife.logic.bl.location.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bl.location.interfaeces.LocationService;
import ru.schoolarlife.logic.bo.location.Address;
import ru.schoolarlife.logic.bo.location.City;
import ru.schoolarlife.logic.bo.location.Country;
import ru.schoolarlife.logic.model.dao.repositories.location.AddressRepository;
import ru.schoolarlife.logic.model.dao.repositories.location.CityRepository;
import ru.schoolarlife.logic.model.dao.repositories.location.CountryRepository;

/**
 * Created by victor on 11.11.16.
 */
@Service
public class LocationServiceImpl implements LocationService{

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private CityRepository cityRepository;

    @Override
    public Address saveAddress(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public Country saveCountry(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public Country findCountryByName(String countryName) {
        return countryRepository.findByName(countryName);
    }

    @Override
    public City saveCity(City city) {
        return cityRepository.save(city);
    }

    @Override
    public City findCityByName(String cityName) {
        return cityRepository.findByName(cityName);
    }
}

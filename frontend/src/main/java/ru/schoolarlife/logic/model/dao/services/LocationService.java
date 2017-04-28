package ru.schoolarlife.logic.model.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.location.Address;
import ru.schoolarlife.logic.bo.location.City;
import ru.schoolarlife.logic.bo.location.Country;
import ru.schoolarlife.logic.model.dao.repositories.location.AddressRepository;
import ru.schoolarlife.logic.model.dao.repositories.location.CityRepository;
import ru.schoolarlife.logic.model.dao.repositories.location.CountryRepository;

import java.util.List;

/**
 * Created by victor on 28.04.17.
 */
@Service
public class LocationService {

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    CountryRepository countryRepository;

    @Autowired
    CityRepository cityRepository;

    public List<Address> getAllAddresses()
    {
        return addressRepository.findAll();
    }

    public List<Country> getAllCountries()
    {
        return countryRepository.findAll();
    }

    public List<City> getAllCities()
    {
        return cityRepository.findAll();
    }

    public Address getAddressById(Long id)
    {
        return addressRepository.findOne(id);
    }

    public Country getCountryById(Long id)
    {
        return countryRepository.findOne(id);
    }

    public City getCityById(Long id)
    {
        return cityRepository.findOne(id);
    }

    public Address saveAddress(Address address)
    {
        return addressRepository.save(address);
    }

    public Country saveCountry(Country country)
    {
        return countryRepository.save(country);
    }

    public City saveCity(City city)
    {
        return cityRepository.save(city);
    }

    public void deleteAddressById(Long id)
    {
        addressRepository.delete(id);
    }

    public void deleteCountryById(Long id)
    {
        countryRepository.delete(id);
    }

    public void deleteCityById(Long id)
    {
        cityRepository.delete(id);
    }
}

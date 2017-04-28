package ru.schoolarlife.rest.controllers.location;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.util.UriComponentsBuilder;
import ru.schoolarlife.logic.bo.location.Address;
import ru.schoolarlife.logic.bo.location.City;
import ru.schoolarlife.logic.bo.location.Country;
import ru.schoolarlife.logic.model.dao.services.LocationService;
import ru.schoolarlife.logic.util.CustomErrorType;
import ru.schoolarlife.rest.controllers.admin.BaseAdminRestController;
import ru.schoolarlife.rest.controllers.admin.ProfileRestController;

import java.util.List;

/**
 * Created by victor on 28.04.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/location")
public class LocationRestController extends BaseAdminRestController {

    public static final Logger logger = LoggerFactory.getLogger(ProfileRestController.class);

    @Autowired
    LocationService locationService;

    @RequestMapping(value = "/address", method = RequestMethod.GET)
    public ResponseEntity<List<Address>> getAllAddresses() {

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        List<Address> addresses = locationService.getAllAddresses();
        if (addresses.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Address>>(addresses, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public ResponseEntity<List<Country>> getAllCountries() {

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        List<Country> countries = locationService.getAllCountries();
        if (countries.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Country>>(countries, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/city", method = RequestMethod.GET)
    public ResponseEntity<List<City>> getAllCities() {

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        List<City> cities = locationService.getAllCities();
        if (cities.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<City>>(cities, headers, HttpStatus.OK);
    }

    @GetMapping("/address/{addressId}")
    public ResponseEntity<?> getAddress(@PathVariable("addressId") Long addressId) {
        logger.info("Fetching Address with ID {}", addressId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        Address address = locationService.getAddressById(addressId);

        if (address == null) {
            logger.error("Address instance with ID {} not found.", addressId);
            return new ResponseEntity<>(new CustomErrorType("Address in with ID " + addressId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Address>(address, headers, HttpStatus.OK);
    }

    @GetMapping("/country/{countryId}")
    public ResponseEntity<?> getCountry(@PathVariable("countryId") Long countryId) {
        logger.info("Fetching Country with ID {}", countryId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        Country country = locationService.getCountryById(countryId);

        if (country == null) {
            logger.error("Country instance with ID {} not found.", countryId);
            return new ResponseEntity<>(new CustomErrorType("Country in with ID " + countryId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Country>(country, headers, HttpStatus.OK);
    }

    @GetMapping("/city/{cityId}")
    public ResponseEntity<?> getCity(@PathVariable("cityId") Long cityId) {
        logger.info("Fetching City with ID {}", cityId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        City city = locationService.getCityById(cityId);

        if (city == null) {
            logger.error("City instance with ID {} not found.", cityId);
            return new ResponseEntity<>(new CustomErrorType("City in with ID " + cityId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<City>(city, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/address", method = RequestMethod.POST)
    public ResponseEntity<?> createAddress(@RequestBody Address address, UriComponentsBuilder ucBuilder) {
        logger.info("Creating Address instance : {}", address);

        address = locationService.saveAddress(address);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Address>(address, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/country", method = RequestMethod.POST)
    public ResponseEntity<?> createCountry(@RequestBody Country country, UriComponentsBuilder ucBuilder) {
        logger.info("Creating Country instance : {}", country);

        country = locationService.saveCountry(country);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Country>(country, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/city", method = RequestMethod.POST)
    public ResponseEntity<?> createCity(@RequestBody City city, UriComponentsBuilder ucBuilder) {
        logger.info("Creating City instance : {}", city);

        city = locationService.saveCity(city);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<City>(city, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/address/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateAddress(@PathVariable("id") long id, @RequestBody Address address) {
        logger.info("Updating Country with id {}", id);

        Address currentAddress = locationService.getAddressById(id);

        if (currentAddress == null) {
            logger.error("Unable to update. Address with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. Address with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }

        address = locationService.saveAddress(address);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Address>(address, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/country/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateCountry(@PathVariable("id") long id, @RequestBody Country country) {
        logger.info("Updating Country with id {}", id);

        Country currentCountry = locationService.getCountryById(id);

        if (currentCountry == null) {
            logger.error("Unable to update. Country with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. Country with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }

        country = locationService.saveCountry(country);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Country>(country, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/city/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateCity(@PathVariable("id") long id, @RequestBody City city) {
        logger.info("Updating City with id {}", id);

        City currentCity = locationService.getCityById(id);

        if (currentCity == null) {
            logger.error("Unable to update. City with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. City with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }

        city = locationService.saveCity(city);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<City>(city, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/address/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteAddress(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting Address with id {}", id);

        Address address = locationService.getAddressById(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (address == null) {
            logger.error("Unable to delete. Address with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. Address with id " + id + " not found."),
                    headers, HttpStatus.NOT_FOUND);
        }

        locationService.deleteAddressById(id);

        return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/country/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCountry(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting Country with id {}", id);

        Country country = locationService.getCountryById(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (country == null) {
            logger.error("Unable to delete. Country with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. Country with id " + id + " not found."),
                    headers, HttpStatus.NOT_FOUND);
        }

        locationService.deleteCountryById(id);

        return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/city/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCity(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting City with id {}", id);

        City city = locationService.getCityById(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (city == null) {
            logger.error("Unable to delete. City with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. City with id " + id + " not found."),
                    headers, HttpStatus.NOT_FOUND);
        }

        locationService.deleteCountryById(id);

        return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
    }
}

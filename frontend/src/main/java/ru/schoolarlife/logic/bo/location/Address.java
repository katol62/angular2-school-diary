package ru.schoolarlife.logic.bo.location;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import ru.schoolarlife.logic.bo.person.Person;
import ru.schoolarlife.logic.util.json.View;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by victor on 01.11.16.
 */
@Entity
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(View.Summary.class)
    private long id;

    @NotNull
    @JsonView(View.Summary.class)
    private String zip;

    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="country_id")
    @JsonView(View.Summary.class)
    private Country country;

    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="city_id")
    @JsonView(View.Summary.class)
    private City city;

    @NotNull
    @JsonView(View.Summary.class)
    private String addressLine;

    @JsonView(View.Summary.class)
    private String comment;

    @OneToOne(fetch=FetchType.LAZY, mappedBy="address")
    @JsonIgnore
    private Person owner;

    public Address() {
    }

    public Address(String zip, Country country, City city, String addressLine, String comment) {
        this.zip = zip;
        this.country = country;
        this.city = city;
        this.addressLine = addressLine;
        this.comment = comment;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public String getAddressLine() {
        return addressLine;
    }

    public void setAddressLine(String addressLine) {
        this.addressLine = addressLine;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Person getOwner() {
        return owner;
    }

    public void setOwner(Person owner) {
        this.owner = owner;
    }
}

package ru.schoolarlife.logic.bo.person;

import ru.schoolarlife.logic.bo.location.Address;
import ru.schoolarlife.logic.helpers.Gender;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;



/**
 * Created by victor on 01.11.16.
 */
@SuppressWarnings("PMD")
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String firstName;

    private String middleName;

    @NotNull
    private String lastName;

    private String logoImage;

    private Gender gender;

    @NotNull
    private Date birthDate;

    @NotNull
    private int age;

    @NotNull
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="address_id")
    private Address address;


    private String phone;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLogoImage() {
        return logoImage;
    }

    public void setLogoImage(String logoImage) {
        this.logoImage = logoImage;
    }
}

package ru.schoolarlife.logic.bo.person;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import ru.schoolarlife.logic.bo.location.Address;
import ru.schoolarlife.logic.util.enums.Gender;
import ru.schoolarlife.logic.util.json.View;
import ru.schoolarlife.logic.util.json.coders.EnumDeserializer;
import ru.schoolarlife.logic.util.json.coders.EnumSerializer;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;



/**
 * Created by victor on 01.11.16.
 */
@SuppressWarnings("PMD")
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(View.Summary.class)
    private long id;

    @JsonView(View.Summary.class)
    private long userId;

    @NotNull
    @JsonView(View.Summary.class)
    private String firstName;

    @JsonView(View.Summary.class)
    private String middleName;

    @NotNull
    @JsonView(View.Summary.class)
    private String lastName;

    @JsonView(View.Summary.class)
    private String logoImage;

    @JsonView(View.Summary.class)
    @JsonSerialize(using = EnumSerializer.class)
    @JsonDeserialize(using = EnumDeserializer.class)
    private Gender gender;

    @NotNull
    @JsonFormat(pattern="dd-MM-yyyy")
    @JsonView(View.Summary.class)
    private Date birthDate;

    @NotNull
    @JsonView(View.Summary.class)
    private int age;

    @NotNull
    @JoinColumn(name="address_id")
    @JsonView(View.Summary.class)
    private String email;


    @NotNull
    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="address_id")
    @JsonView(View.Summary.class)
    private Address address;

    @JsonView(View.Summary.class)
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

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

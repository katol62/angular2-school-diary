package ru.schoolarlife.logic.bo.school;

import ru.schoolarlife.logic.bo.location.Address;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@Entity
@Table(name = "schoolbuilding")
public class SchoolBuilding {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String name;

    @NotNull
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="address_id")
    private Address address;

    @OneToMany(mappedBy="building")
    private Set<ClassRoom> classRooms;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="school_id")
    private School school;

    public SchoolBuilding() {
    }

    public SchoolBuilding(long id, String name, Address address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Set<ClassRoom> getClassRooms() {
        return classRooms;
    }

    public void setClassRooms(Set<ClassRoom> classRooms) {
        this.classRooms = classRooms;
    }
}

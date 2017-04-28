package ru.schoolarlife.logic.bo.location;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import ru.schoolarlife.logic.util.json.View;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by victor on 01.11.16.
 */
@Entity
@Table(name = "city")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(View.Summary.class)
    private long id;

    @NotNull
    @JsonView(View.Summary.class)
    private String name;

    @OneToOne(fetch=FetchType.LAZY, mappedBy="city")
    @JsonIgnore
    private Address owner;

    public City() {
    }

    public City(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Address getOwner() {
        return owner;
    }

    public void setOwner(Address owner) {
        this.owner = owner;
    }
}

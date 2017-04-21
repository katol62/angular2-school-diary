package ru.schoolarlife.logic.bo.school;

import ru.schoolarlife.logic.bo.lifecycle.SchoolClass;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

/**
 * Created by victor on 08.11.16.
 */
@Entity
@Table(name = "classroom")
public class ClassRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String name;

    @NotNull
    private int floorNumber;

    @NotNull
    private int seatsNumber;

    private boolean hasProjector;

    private boolean hasElectronicBoard;

    @OneToMany(mappedBy="classRoom")
    private Set<Camera> cameras;

    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="schoolclass_id")
    private SchoolClass embededSchoolClass;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="building_id")
    private SchoolBuilding building;

    public ClassRoom() {
    }

    public ClassRoom(long id, String name, int floorNumber, int seatsNumber, boolean hasProjector, boolean hasElectronicBoard, Set<Camera> cameraLink, SchoolClass embededSchoolClass) {
        this.id = id;
        this.name = name;
        this.floorNumber = floorNumber;
        this.seatsNumber = seatsNumber;
        this.hasProjector = hasProjector;
        this.hasElectronicBoard = hasElectronicBoard;
        this.cameras = cameraLink;
        this.embededSchoolClass = embededSchoolClass;
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

    public int getFloorNumber() {
        return floorNumber;
    }

    public void setFloorNumber(int floorNumber) {
        this.floorNumber = floorNumber;
    }

    public int getSeatsNumber() {
        return seatsNumber;
    }

    public void setSeatsNumber(int seatsNumber) {
        this.seatsNumber = seatsNumber;
    }

    public boolean isHasProjector() {
        return hasProjector;
    }

    public void setHasProjector(boolean hasProjector) {
        this.hasProjector = hasProjector;
    }

    public boolean isHasElectronicBoard() {
        return hasElectronicBoard;
    }

    public void setHasElectronicBoard(boolean hasElectronicBoard) {
        this.hasElectronicBoard = hasElectronicBoard;
    }

    public Set<Camera> getCameras() {
        return cameras;
    }

    public void setCameras(Set<Camera> cameras) {
        this.cameras = cameras;
    }

    public SchoolClass getEmbededSchoolClass() {
        return embededSchoolClass;
    }

    public void setEmbededSchoolClass(SchoolClass embededSchoolClass) {
        this.embededSchoolClass = embededSchoolClass;
    }

    public SchoolBuilding getBuilding() {
        return building;
    }

    public void setBuilding(SchoolBuilding building) {
        this.building = building;
    }
}

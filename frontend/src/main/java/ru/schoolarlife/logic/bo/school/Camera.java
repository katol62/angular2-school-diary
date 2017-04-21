package ru.schoolarlife.logic.bo.school;

import ru.schoolarlife.logic.helpers.CameraProtocolType;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by victor on 16.11.16.
 */
@Entity
@Table(name = "camera")
public class Camera {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String name;

    @NotNull
    private String cameraUrl;

    private CameraProtocolType protocolType;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="class_room_id")
    private ClassRoom classRoom;

    public Camera() {
    }

    public Camera(String name, String cameraUrl, CameraProtocolType protocolType) {
        this.name = name;
        this.cameraUrl = cameraUrl;
        this.protocolType = protocolType;
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

    public String getCameraUrl() {
        return cameraUrl;
    }

    public void setCameraUrl(String cameraUrl) {
        this.cameraUrl = cameraUrl;
    }

    public CameraProtocolType getProtocolType() {
        return protocolType;
    }

    public void setProtocolType(CameraProtocolType protocolType) {
        this.protocolType = protocolType;
    }
}

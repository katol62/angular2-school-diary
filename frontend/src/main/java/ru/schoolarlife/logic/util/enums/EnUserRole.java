package ru.schoolarlife.logic.util.enums;

/**
 * Created by victor on 28.04.17.
 */
public enum EnUserRole implements JSONEnum<EnUserRole>{
    ROLE_GLOGAL_ADMIN(0),
    ROLE_LOCAL_ADMIN(1),
    ROLE_PRINCIPAL(2),
    ROLE_TEACHER(3),
    ROLE_PARENT(4),
    ROLE_STUDENT(5);

    Integer role;

    EnUserRole() {
    }

    EnUserRole(Integer value) {
        this.role = value;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return role.toString();
    }

    public static EnUserRole getById(int id) {
        for (EnUserRole testEnum : values()) {
            if (testEnum.getRole() == id) {
                return testEnum;
            }
        }
        return null;
    }

    @Override
    public Object toJSON() {
        return role;
    }

    @Override
    public EnUserRole fromJSON(String value) {
        return getById(Integer.valueOf(value));
    }
}

package ru.schoolarlife.logic.util.enums;

public enum Gender implements JSONEnum<Gender>
{
    MALE(0), FEMALE(1);

    Integer gender;

    Gender(Integer value) {
        gender = value;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return getGender().toString();
    }

    public static Gender getById(int id) {
        for (Gender testEnum : values()) {
            if (testEnum.getGender() == id) {
                return testEnum;
            }
        }
        return null;
    }

    @Override
    public Object toJSON() {
        return getGender();
    }

    @Override
    public Gender fromJSON(String value) {
        return getById(Integer.valueOf(value));
    }
}
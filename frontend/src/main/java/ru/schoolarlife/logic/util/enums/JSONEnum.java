package ru.schoolarlife.logic.util.enums;

/**
 * Created by victor on 28.04.17.
 */
public interface JSONEnum<T> {
    Object toJSON();

    T fromJSON(String value);
}

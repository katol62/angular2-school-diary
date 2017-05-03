package ru.schoolarlife.logic.util.enums;

/**
 * Created by victor on 03.05.17.
 */
public enum PublicNewsStreamType implements JSONEnum<PublicNewsStreamType> {
    EDUCATION(0), SPORT(1), SOCIETY(2), LAW(3), SCIENCE(4);

    Integer newsStreamType;

    PublicNewsStreamType(Integer value) {
        newsStreamType = value;
    }

    public Integer getNewsStreamType() {
        return newsStreamType;
    }

    public void setNewsStreamType(Integer nst) {
        this.newsStreamType = nst;
    }

    @Override
    public String toString() {
        return getNewsStreamType().toString();
    }

    public static PublicNewsStreamType getById(int id) {
        for (PublicNewsStreamType testEnum : values()) {
            if (testEnum.getNewsStreamType() == id) {
                return testEnum;
            }
        }
        return null;
    }

    @Override
    public Object toJSON() {
        return getNewsStreamType();
    }

    @Override
    public PublicNewsStreamType fromJSON(String value) {
        return getById(Integer.valueOf(value));
    }
}

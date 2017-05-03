package ru.schoolarlife.logic.util.enums;

/**
 * Created by victor on 03.05.17.
 */
public enum PublicNewsType implements JSONEnum<PublicNewsType> {
    SYSTEM(0), NETWORK(1), AROUND(2);

    Integer newsType;

    PublicNewsType(Integer value) {
        newsType = value;
    }

    public Integer getNewsType() {
        return newsType;
    }

    public void setNewsType(Integer nt) {
        this.newsType = nt;
    }

    @Override
    public String toString() {
        return getNewsType().toString();
    }

    public static PublicNewsType getById(int id) {
        for (PublicNewsType testEnum : values()) {
            if (testEnum.getNewsType() == id) {
                return testEnum;
            }
        }
        return null;
    }

    @Override
    public Object toJSON() {
        return getNewsType();
    }

    @Override
    public PublicNewsType fromJSON(String value) {
        return getById(Integer.valueOf(value));
    }
}

package ru.schoolarlife.logic.util.enums;

/**
 * Created by victor on 03.05.17.
 */
public enum GameType implements JSONEnum<GameType> {
    LOGIC(0), ARCADE(1);

    Integer gameType;

    GameType(Integer value) {
        gameType = value;
    }

    public Integer getGameType() {
        return gameType;
    }

    public void setGameType(Integer gt) {
        this.gameType = gt;
    }

    @Override
    public String toString() {
        return getGameType().toString();
    }

    public static GameType getById(int id) {
        for (GameType testEnum : values()) {
            if (testEnum.getGameType() == id) {
                return testEnum;
            }
        }
        return null;
    }

    @Override
    public Object toJSON() {
        return getGameType();
    }

    @Override
    public GameType fromJSON(String value) {
        return getById(Integer.valueOf(value));
    }
}

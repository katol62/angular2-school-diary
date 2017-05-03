package ru.schoolarlife.logic.bo.unsecure;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import ru.schoolarlife.logic.util.enums.GameType;
import ru.schoolarlife.logic.util.json.View;
import ru.schoolarlife.logic.util.json.coders.EnumDeserializer;
import ru.schoolarlife.logic.util.json.coders.EnumSerializer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Created by victor on 03.05.17.
 */
@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(View.Summary.class)
    private Long id;

    @JsonView(View.Summary.class)
    @JsonSerialize(using = EnumSerializer.class)
    @JsonDeserialize(using = EnumDeserializer.class)
    private GameType gameType;

    @NotNull
    @JsonView(View.Summary.class)
    private String header;

    @NotNull
    @JsonView(View.Summary.class)
    private String description;

    @NotNull
    @JsonFormat(pattern="dd-MM-yyyy")
    @JsonView(View.Summary.class)
    private Date publicationDate;

    @NotNull
    @JsonView(View.Summary.class)
    private String placeholderImageUrl;

    @NotNull
    @JsonView(View.Summary.class)
    private String gameUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public GameType getGameType() {
        return gameType;
    }

    public void setGameType(GameType gameType) {
        this.gameType = gameType;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(Date publicationDate) {
        this.publicationDate = publicationDate;
    }

    public String getPlaceholderImageUrl() {
        return placeholderImageUrl;
    }

    public void setPlaceholderImageUrl(String placeholderImageUrl) {
        this.placeholderImageUrl = placeholderImageUrl;
    }

    public String getGameUrl() {
        return gameUrl;
    }

    public void setGameUrl(String gameUrl) {
        this.gameUrl = gameUrl;
    }
}

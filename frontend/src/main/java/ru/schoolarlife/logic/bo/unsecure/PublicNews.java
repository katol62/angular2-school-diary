package ru.schoolarlife.logic.bo.unsecure;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import ru.schoolarlife.logic.util.enums.PublicNewsStreamType;
import ru.schoolarlife.logic.util.enums.PublicNewsType;
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
public class PublicNews {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(View.Summary.class)
    private Long id;

    @JsonView(View.Summary.class)
    @JsonSerialize(using = EnumSerializer.class)
    @JsonDeserialize(using = EnumDeserializer.class)
    private PublicNewsType publicNewsType;

    @JsonView(View.Summary.class)
    @JsonSerialize(using = EnumSerializer.class)
    @JsonDeserialize(using = EnumDeserializer.class)
    private PublicNewsStreamType publicNewsStreamType;

    @NotNull
    @JsonView(View.Summary.class)
    private String header;

    @NotNull
    @JsonView(View.Summary.class)
    private String description;

    @NotNull
    @JsonView(View.Summary.class)
    private String htmlPresentation;

    @NotNull
    @JsonFormat(pattern="dd-MM-yyyy")
    @JsonView(View.Summary.class)
    private Date publicationDate;

    @JsonView(View.Summary.class)
    private boolean top;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PublicNewsType getPublicNewsType() {
        return publicNewsType;
    }

    public void setPublicNewsType(PublicNewsType publicNewsType) {
        this.publicNewsType = publicNewsType;
    }

    public PublicNewsStreamType getPublicNewsStreamType() {
        return publicNewsStreamType;
    }

    public void setPublicNewsStreamType(PublicNewsStreamType publicNewsStreamType) {
        this.publicNewsStreamType = publicNewsStreamType;
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

    public String getHtmlPresentation() {
        return htmlPresentation;
    }

    public void setHtmlPresentation(String htmlPresentation) {
        this.htmlPresentation = htmlPresentation;
    }

    public Date getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(Date publicationDate) {
        this.publicationDate = publicationDate;
    }

    public boolean isTop() {
        return top;
    }

    public void setTop(boolean top) {
        this.top = top;
    }
}

package ru.schoolarlife.logic.bo.unsecure;

import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import ru.schoolarlife.logic.util.json.View;
import ru.schoolarlife.logic.util.json.coders.EnumDeserializer;
import ru.schoolarlife.logic.util.json.coders.EnumSerializer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

/**
 * Created by victor on 09.07.17.
 */
@Entity
public class GameCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(View.Summary.class)
    private Long id;

    @NotNull
    @JsonView(View.Summary.class)
    private String name;

    @NotNull
    @JsonView(View.Summary.class)
    private String avatarPath;
}

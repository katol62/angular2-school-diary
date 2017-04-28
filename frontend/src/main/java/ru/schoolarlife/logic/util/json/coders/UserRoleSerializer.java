package ru.schoolarlife.logic.util.json.coders;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import ru.schoolarlife.logic.util.enums.EnUserRole;
import ru.schoolarlife.logic.util.enums.JSONEnum;

import java.io.IOException;

/**
 * Created by victor on 28.04.17.
 */
public class UserRoleSerializer<E extends JSONEnum<E>> extends JsonSerializer<JSONEnum<E>> {
    @Override
    public void serialize(JSONEnum<E> ejsonEnum, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeObject(ejsonEnum.toJSON());
    }
    /*@Override
    public void serialize(EnUserRole enUserRole, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeStartObject();
    //    jsonGenerator.writeFieldName("primeRole");
        jsonGenerator.writeNumber(enUserRole.getRole());
        jsonGenerator.writeEndObject();
    }*/
}

package ru.schoolarlife.logic.util.json.coders;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.BeanProperty;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.deser.ContextualDeserializer;
import ru.schoolarlife.logic.util.enums.EnUserRole;
import ru.schoolarlife.logic.util.enums.JSONEnum;

import java.io.IOException;

/**
 * Created by victor on 28.04.17.
 */
public class EnumDeserializer<E extends JSONEnum<E>> extends JsonDeserializer<E> implements ContextualDeserializer {

    private E target;

    @Override
    public E deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        return target.fromJSON(jsonParser.getText());
    }

    @Override
    public JsonDeserializer<?> createContextual(DeserializationContext deserializationContext, BeanProperty beanProperty) throws JsonMappingException {
        Class<E> clazz = (Class<E>) deserializationContext.getContextualType().getRawClass();
        target = clazz.getEnumConstants()[0];
        return this;
    }
}

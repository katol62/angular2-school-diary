package ru.schoolarlife.mail.service;

import freemarker.template.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.mail.interfaces.MailComposer;


import java.util.HashMap;
import java.util.Map;


/**
 * Created by victor on 14.11.16.
 */
@Service
public class MailComposerImpl implements MailComposer {

    @Autowired
    Configuration freeMarkerConfiguration;

    @Override
    public String getComfirmationMailForUser(User user, String comfirmationUrl) {

        Map<String, Object> model = new HashMap<String, Object>();
        model.put("title", "Подтверждение регистрации");
        model.put("username", user.getName());
        model.put("comfirmlink", comfirmationUrl);
        StringBuffer content = new StringBuffer();
        try{
            content.append(FreeMarkerTemplateUtils.processTemplateIntoString(
                    freeMarkerConfiguration.getTemplate("comfirmmail.ftl"),model));
            return content.toString();
        }catch(Exception e){
            System.out.println("Exception occured while processing fmtemplate:"+e.getMessage());
        }
        return "";
    }
}

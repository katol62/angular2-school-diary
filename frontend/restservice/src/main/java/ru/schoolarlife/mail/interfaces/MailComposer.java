package ru.schoolarlife.mail.interfaces;

import ru.schoolarlife.logic.bo.security.User;

/**
 * Created by victor on 14.11.16.
 */
public interface MailComposer {
    public String getComfirmationMailForUser(User user, String comfirmationUrl);
}

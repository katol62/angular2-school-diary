package ru.schoolarlife.mail.interfaces;

/**
 * Created by victor on 14.11.16.
 */
public interface MailSender {
    void sendMailTo(String to, String subject, String message);
}

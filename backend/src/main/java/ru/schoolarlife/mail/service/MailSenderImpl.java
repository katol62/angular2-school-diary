package ru.schoolarlife.mail.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import ru.schoolarlife.mail.interfaces.MailSender;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

/**
 * Created by victor on 14.11.16.
 */
@Service
public class MailSenderImpl implements MailSender {
    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${mail.from}")
    private String from;

    @Override
    public void sendMailTo(String to, String subject, String message) {
        MimeMessage mail = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mail, true);
            helper.setTo(to);
            //TODO: change to config reader
            helper.setReplyTo(from);
            helper.setFrom(from);
            helper.setSubject(subject);
            helper.setText(message, true);
        } catch (MessagingException e) {
            e.printStackTrace();
        } finally {}
        javaMailSender.send(mail);
    }
}

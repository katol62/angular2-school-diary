package ru.schoolarlife.logic.helpers;

import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

/**
 * Created by victor on 21.11.16.
 */
@Component
public class ActivationCodeEncoder {

    public String randomActivationString()
    {
        String salt = new BigInteger(32, new Random()).toString(36);
        return salt;
    }

    public String md5ActivationString(String inputString) throws NoSuchAlgorithmException {
        String algorithm = "";
        if (inputString == null) {
            return "null";
        }

        algorithm = System.getProperty("MD5.algorithm", "MD5");

        MessageDigest md = null;
        md = MessageDigest.getInstance(algorithm);

        byte buffer[] = inputString.getBytes();

        for (int count = 0; count < inputString.length(); count++) {
            md.update(buffer, 0, count);
        }

        byte bDigest[] = md.digest();
        BigInteger bi = new BigInteger(bDigest);

        return (bi.abs().toString(16));
    }
}

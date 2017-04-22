package ru.schoolarlife.rest.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.model.dao.repositories.security.UserRepository;
import ru.schoolarlife.util.CustomErrorType;

import java.util.Map;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthRestController {

    public static final Logger logger = LoggerFactory.getLogger(AuthRestController.class);

    @Autowired
    UserRepository userRepository;


    @RequestMapping(value = "/login/", method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody Object data) {

        String email = (String) ((Map) data).get("email");
        String password = (String) ((Map) data).get("password");

        logger.info("Fetching User with login {}, password {}", email, password);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        //Auth user = authService.authenticate(login, password);

        User user = userRepository.findByEmail(email);

        if (user == null) {
            logger.error("User with email {}, password {} not found.", email, password);
            return new ResponseEntity<>(new CustomErrorType("User with email " + email
                    + " password " + password + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user, headers, HttpStatus.OK);
    }

}
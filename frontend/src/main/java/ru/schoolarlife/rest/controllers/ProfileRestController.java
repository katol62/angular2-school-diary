package ru.schoolarlife.rest.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;
import ru.schoolarlife.logic.bo.person.Parent;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.model.Auth;
import ru.schoolarlife.logic.model.dao.repositories.security.UserRepository;
import ru.schoolarlife.util.CustomErrorType;


import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Paths;
import java.util.List;

/**
 * Created by victor on 22.11.16.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/profile")
public class ProfileRestController {

    public static final Logger logger = LoggerFactory.getLogger(ProfileRestController.class);

    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @GetMapping("/{profileId}")
    public ResponseEntity<?> getProfile(@PathVariable("profileId") Integer profileId) {
        logger.info("Fetching User with ID {}", profileId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        User user = userRepository.findById(profileId);

        if (user == null) {
            logger.error("User with ID {} not found.", profileId);
            return new ResponseEntity<>(new CustomErrorType("User with ID " + profileId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {
        logger.info("Creating User : {}", user);

        if (userRepository.findByEmail(user.getEmail()) != null) {
            logger.error("Unable to create. A User with email {} already exist", user.getEmail());
            return new ResponseEntity<>(new CustomErrorType("Unable to create. A User with email " +
                    user.getEmail() + " already exist."), HttpStatus.CONFLICT);
        }

        userRepository.save(user);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/api/user/{id}").buildAndExpand(user.getId()).toUri());
        return new ResponseEntity<String>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateUser(@PathVariable("id") long id, @RequestBody User user) {
        logger.info("Updating User with id {}", id);

        User currentUser = userRepository.findById(id);

        if (currentUser == null) {
            logger.error("Unable to update. User with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to upate. User with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }

        user.setId(id);

        userRepository.save(user);
        return new ResponseEntity<User>(HttpStatus.OK);
    }

    @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    public String uploadProfilePicture(@RequestParam("uploadfile") MultipartFile uploadfile, Model model) {

        try {

            String rootPath = System.getProperty("catalina.home");

            String filename = uploadfile.getOriginalFilename();
            String directory = "/home/victor/Pictures/1";
            String filepath = Paths.get(directory, filename).toString();

            // Save the file locally
            BufferedOutputStream stream =
                    new BufferedOutputStream(new FileOutputStream(new File(filepath)));
            stream.write(uploadfile.getBytes());
            stream.close();
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            return "person/editprofile";
        }
        model.addAttribute("userProfile", new Parent());
        return "person/editprofile";
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting User with id {}", id);

        User user = userRepository.findById(id);
        if (user == null) {
            logger.error("Unable to delete. User with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. User with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        userRepository.delete(user);
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }

}

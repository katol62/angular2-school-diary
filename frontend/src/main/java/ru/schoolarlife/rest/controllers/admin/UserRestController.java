package ru.schoolarlife.rest.controllers.admin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.model.dao.services.UserService;
import ru.schoolarlife.logic.util.CustomErrorType;

import java.util.List;

/**
 * Created by victor on 28.04.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserRestController extends BaseAdminRestController {
    public static final Logger logger = LoggerFactory.getLogger(ProfileRestController.class);

    @Autowired
    UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers() {
        super.isCurrentUsersAllowed();
        List<User> users = userService.getAllUsers();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (users.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<User>>(users, headers, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUser(@PathVariable("userId") Long userId) {
        logger.info("Fetching User with ID {}", userId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        User user = userService.getOneById(userId);

        if (user == null) {
            logger.error("User with ID {} not found.", userId);
            return new ResponseEntity<>(new CustomErrorType("User with ID " + userId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {
        logger.info("Creating User : {}", user);

        if (userService.findByEmail(user.getEmail()) != null) {
            logger.error("Unable to create. A User with email {} already exist", user.getEmail());
            return new ResponseEntity<>(new CustomErrorType("Unable to create. A User with email " +
                    user.getEmail() + " already exist."), HttpStatus.CONFLICT);
        }

        user = userService.save(user);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<User>(user, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateUser(@PathVariable("id") long id, @RequestBody User user) {
        logger.info("Updating User with id {}", id);

        User currentUser = userService.getOneById(id);

        if (currentUser == null) {
            logger.error("Unable to update. User with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. User with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }

        //person.setId(id);

        user = userService.save(user);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<User>(user, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting User with id {}", id);

        User user = userService.getOneById(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (user == null) {
            logger.error("Unable to delete. User with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. User with id " + id + " not found."),
                    headers, HttpStatus.NOT_FOUND);
        }

        userService.delete(user);

        return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
    }
}

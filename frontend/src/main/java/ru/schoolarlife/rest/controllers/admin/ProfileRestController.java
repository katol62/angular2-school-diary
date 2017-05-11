package ru.schoolarlife.rest.controllers.admin;

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
import ru.schoolarlife.logic.bo.person.Person;
import ru.schoolarlife.logic.bo.person.Student;
import ru.schoolarlife.logic.bo.person.Teacher;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.model.dao.services.ProfileService;
import ru.schoolarlife.logic.model.dao.services.UserService;
import ru.schoolarlife.logic.util.CustomErrorType;
import ru.schoolarlife.logic.util.enums.EnUserRole;

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
public class ProfileRestController extends BaseAdminRestController {

    public static final Logger logger = LoggerFactory.getLogger(ProfileRestController.class);

    @Autowired
    ProfileService profileService;

    @Autowired
    UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<Person>> getAllProfiles() {

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        List<Person> profiles = profileService.getAllProfiles();
        if (profiles.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Person>>(profiles, headers, HttpStatus.OK);
    }

    @GetMapping("/{profileId}")
    public ResponseEntity<?> getProfile(@PathVariable("profileId") Long profileId) {
        logger.info("Fetching User with ID {}", profileId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        Person person = profileService.getOneById(profileId);

        if (person == null) {
            logger.error("Profile with ID {} not found.", profileId);
            return new ResponseEntity<>(new CustomErrorType("Profile with ID " + profileId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Person>(person, headers, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getProfileByUser(@PathVariable("userId") Long userId) {
        logger.info("Fetching Person with UserID {}", userId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        Person person = profileService.getOneByUserId(userId);

        if (person == null) {
            logger.error("Profile with ID {} not found.", userId);
            return new ResponseEntity<>(new CustomErrorType("Profile with UserID " + userId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Person>(person, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<?> createProfile(@RequestBody Person person, UriComponentsBuilder ucBuilder) {
        logger.info("Creating Profile : {}", person);

        if (profileService.findByEmail(person.getEmail()) != null) {
            logger.error("Unable to create. A Profile with email {} already exist", person.getEmail());
            return new ResponseEntity<>(new CustomErrorType("Unable to create. A Profile with email " +
                    person.getEmail() + " already exist."), HttpStatus.CONFLICT);
        }

        if (profileService.getOneByUserId(person.getUserId()) != null) {
            logger.error("Unable to create. A Profile with userid {} already exist", person.getUserId());
            return new ResponseEntity<>(new CustomErrorType("Unable to create. A Profile with userId " +
                    person.getUserId() + " already exist."), HttpStatus.CONFLICT);
        }

        User user = userService.getOneById(person.getUserId());
        if(user == null)
        {
            logger.error("Unable to create. There isn't User instance for Profile with email {}", person.getEmail());
            return new ResponseEntity<>(new CustomErrorType("Unable to create. There isn't User instance for Profile with email " +
                    person.getEmail()), HttpStatus.CONFLICT);
        }

        if (user.getPrimeRole() == EnUserRole.ROLE_GLOGAL_ADMIN || user.getPrimeRole() == EnUserRole.ROLE_LOCAL_ADMIN)
        {
            person = profileService.save(person);
        }
        else if (user.getPrimeRole() == EnUserRole.ROLE_PRINCIPAL || user.getPrimeRole() == EnUserRole.ROLE_TEACHER)
        {
            person = profileService.saveTeacher(new Teacher(person));
        }
        else if (user.getPrimeRole() == EnUserRole.ROLE_PARENT)
        {
            person = profileService.saveParent(new Parent(person));
        }
        else if (user.getPrimeRole() == EnUserRole.ROLE_STUDENT)
        {
            person = profileService.saveStudent(new Student(person));
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Person>(person, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateUser(@PathVariable("id") long id, @RequestBody Person person) {
        logger.info("Updating Profile with id {}", id);

        Person currentUser = profileService.getOneById(id);

        if (currentUser == null) {
            logger.error("Unable to update. Profile with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. Profile with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }

        //person.setId(id);

        person = profileService.save(person);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Person>(person, headers, HttpStatus.OK);
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
        logger.info("Fetching & Deleting Profile with id {}", id);

        Person person = profileService.getOneById(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (person == null) {
            logger.error("Unable to delete. Profile with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. Profile with id " + id + " not found."),
                    headers, HttpStatus.NOT_FOUND);
        }
        profileService.delete(person);
        return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
    }

}

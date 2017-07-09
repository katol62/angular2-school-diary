package ru.schoolarlife.rest.controllers.admin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import ru.schoolarlife.logic.bo.person.Teacher;
import ru.schoolarlife.logic.model.dao.services.TeacherService;
import ru.schoolarlife.logic.util.CustomErrorType;

/**
 * Created by victor on 09.07.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/teacher")
public class TeacherAdminRestController extends BaseAdminRestController {
    public static final Logger logger = LoggerFactory.getLogger(TeacherAdminRestController.class);

    @Autowired
    TeacherService teacherService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<?> addTeacher(@RequestBody Teacher teacher, UriComponentsBuilder ucBuilder) {
        logger.info("Creating Teacher : {}", teacher);

        teacher = teacherService.save(teacher);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Teacher>(teacher, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateTeacher(@PathVariable("id") long id, @RequestBody Teacher teacher) {
        logger.info("Updating Game with id {}", id);

        Teacher currentTeacher = teacherService.getOneById(id);

        if (currentTeacher == null) {
            logger.error("Unable to update. Teacher with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. Teacher with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }


        teacher = teacherService.save(teacher);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Teacher>(teacher, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteTeacher(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting Teacher with id {}", id);

        Teacher teacher = teacherService.getOneById(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (teacher == null) {
            logger.error("Unable to delete. Teacher with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. Teacher with id " + id + " not found."),
                    headers, HttpStatus.NOT_FOUND);
        }

        teacherService.deleteById(id);

        return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
    }
}

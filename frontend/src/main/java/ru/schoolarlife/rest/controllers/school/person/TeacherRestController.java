package ru.schoolarlife.rest.controllers.school.person;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.schoolarlife.logic.bo.person.Teacher;
import ru.schoolarlife.logic.model.dao.services.TeacherService;
import ru.schoolarlife.logic.util.CustomErrorType;
import ru.schoolarlife.rest.controllers.unsecure.GameRestController;

import java.util.List;

/**
 * Created by victor on 09.07.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/school/teacher")
public class TeacherRestController {
    public static final Logger logger = LoggerFactory.getLogger(TeacherRestController.class);

    @Autowired
    TeacherService teacherService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<Teacher>> getAllTeachers() {

        List<Teacher> teachers = teacherService.getAllTeachers();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (teachers.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Teacher>>(teachers, headers, HttpStatus.OK);
    }

    @GetMapping("/{teacherId}")
    public ResponseEntity<?> getTeacher(@PathVariable("teacherId") Long teacherId) {
        logger.info("Fetching Teacher with ID {}", teacherId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        Teacher teacher = teacherService.getOneById(teacherId);

        if (teacher == null) {
            logger.error("Teacher with ID {} not found.", teacherId);
            return new ResponseEntity<>(new CustomErrorType("Teacher with ID " + teacherId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Teacher>(teacher, headers, HttpStatus.OK);
    }
}

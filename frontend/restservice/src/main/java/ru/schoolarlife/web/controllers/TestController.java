package ru.schoolarlife.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import ru.schoolarlife.logic.bl.lifecycle.interfaces.AbsencesService;
import ru.schoolarlife.logic.bl.lifecycle.interfaces.AssessmentService;
import ru.schoolarlife.logic.bl.lifecycle.interfaces.SchoolClassService;
import ru.schoolarlife.logic.bl.lifecycle.interfaces.SubjectService;
import ru.schoolarlife.logic.bl.location.interfaeces.LocationService;
import ru.schoolarlife.logic.bl.person.interfaces.ParentService;
import ru.schoolarlife.logic.bl.person.interfaces.StudentService;
import ru.schoolarlife.logic.bl.person.interfaces.TeacherService;
import ru.schoolarlife.logic.bl.security.interfaces.RoleService;
import ru.schoolarlife.logic.bl.security.interfaces.SecurityService;
import ru.schoolarlife.logic.bl.security.interfaces.UserService;
import ru.schoolarlife.logic.bl.security.validation.UserValidator;
import ru.schoolarlife.logic.bo.location.Address;
import ru.schoolarlife.logic.bo.location.City;
import ru.schoolarlife.logic.bo.location.Country;
import ru.schoolarlife.logic.bo.person.Parent;
import ru.schoolarlife.logic.bo.person.Student;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.helpers.Gender;
import ru.schoolarlife.mail.interfaces.MailComposer;
import ru.schoolarlife.mail.interfaces.MailSender;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by victor on 11.11.16.
 */
@Controller
public class TestController {

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private StudentService studentService;

    @Autowired
    private ParentService parentService;

    @Autowired
    private TeacherService teacherService;

    @Autowired
    private LocationService locationService;


    @Autowired
    private AbsencesService absencesService;

    @Autowired
    private AssessmentService assessmentService;

    @Autowired
    private SchoolClassService schoolClassService;

    @Autowired
    private SubjectService subjectService;

    @Autowired
    private MailSender mailSender;

    @Autowired
    private MailComposer mailComposer;

    private Model model;

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String testModels(Model model) {
        this.model = model;
        model.addAttribute("message", "Tester");



 /*       Student testStudent = new Student();
        testStudent.setBirthDate(new Date(123556748));
        testStudent.setAge(10);
        testStudent.setFirstName("Сергей");
        testStudent.setMiddleName("Петрович");
        testStudent.setLastName("Сергеев");
        testStudent.setGender(Gender.MALE);
        testStudent.setPhone("+79787774433");


        City city = new City("Евпатория");
        city = locationService.saveCity(city);
        //City city = locationService.findCityByName("Симферополь");

        //Country country = locationService.findCountryByName("Российская Федерация");
        Country country = new Country("Российская Федерация");
        country = locationService.saveCountry(country);

        Address studentAddress = new Address("295000", country, city, "Севастопольская 30 кв.15", "Test student 3");
        studentAddress = locationService.saveAddress(studentAddress);

        testStudent.setAddress(studentAddress);
        studentService.save(testStudent);

        Set<Student> students = studentService.findAllByFirstName("Сергей");
        if (students != null && students.size() == 1)
        {
            Student student = (Student) students.toArray()[0];
            Parent parent = new Parent();
            parent.setBirthDate(new Date(123556748));
            parent.setAge(10);
            parent.setFirstName("Петр");
            parent.setMiddleName("Иванович");
            parent.setLastName("Сергеев");
            parent.setGender(Gender.MALE);
            parent.setPhone("+79787774433");


            parent.setAddress(student.getAddress());
            parent.setStudents(new HashSet<>());
            parent.getStudents().add(student);
            parentService.save(parent);

        }*/

        User user = new User();
        user.setName("Вася Пупкин");

       // String mailtext = mailComposer.getComfirmationMailForUser(user, "http://google.com");
       // mailSender.sendMailTo("user@yandex.ru", mailtext);

        Set<Parent> parents = parentService.findAllByFirstName("Петр");

        return "test";
    }
}

package ru.schoolarlife.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.servlet.ModelAndView;
import ru.schoolarlife.logic.bo.person.Parent;
import ru.schoolarlife.logic.bo.person.Student;
import ru.schoolarlife.logic.bo.person.Teacher;
import ru.schoolarlife.logic.bo.security.User;


import javax.validation.Valid;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Date;
import java.util.Random;

/**
 * Created by victor on 22.11.16.
 */
@Controller
public class ProfileController {

    @GetMapping("/addprofile/{profileType}")
    public String editProfile(@PathVariable("profileType") Integer profileType, Model model) {
        switch (profileType)
        {
            case 0:
            {
                model.addAttribute("userProfile", new Parent());
            }
            case 1:
            {
                model.addAttribute("userProfile", new Teacher());
            }
            case 2:
            {
                model.addAttribute("userProfile", new Student());
            }
            default:
            {
                model.addAttribute("userProfile", new Parent());
            }
        }

        return "person/editprofile";
    }

    @RequestMapping(value = "/addprofile", method = RequestMethod.POST)
    public String registration(@ModelAttribute("userProfile") User userProfile, BindingResult bindingResult, Model model)
    {
        return "redirect:/addprofile/0";
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

}

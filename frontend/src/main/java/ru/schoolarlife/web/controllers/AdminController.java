package ru.schoolarlife.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import ru.schoolarlife.logic.bo.security.User;

import java.security.NoSuchAlgorithmException;

/**
 * Created by victor on 22.11.16.
 */
@Controller
public class AdminController {

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String registration(Model model){
        model.addAttribute("userForm", new User("Admin"));

        return "admin/admin";
    }

}

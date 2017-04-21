package ru.schoolarlife.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import ru.schoolarlife.logic.bl.location.interfaeces.LocationService;
import ru.schoolarlife.logic.bl.person.interfaces.ParentService;
import ru.schoolarlife.logic.bl.security.CustomUserDetails;
import ru.schoolarlife.logic.bl.security.interfaces.RoleService;
import ru.schoolarlife.logic.bl.security.interfaces.SecurityService;
import ru.schoolarlife.logic.bl.security.interfaces.UserService;
import ru.schoolarlife.logic.bl.security.validation.UserValidator;
import ru.schoolarlife.logic.bl.person.interfaces.StudentService;
import ru.schoolarlife.logic.bl.person.interfaces.TeacherService;
import ru.schoolarlife.logic.bo.person.Student;
import ru.schoolarlife.logic.bo.security.Role;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.bo.security.UserActivation;
import ru.schoolarlife.logic.helpers.ActivationCodeEncoder;
import ru.schoolarlife.logic.model.dao.repositories.security.RoleRepository;
import ru.schoolarlife.logic.model.dao.repositories.security.UserActivationRepository;
import ru.schoolarlife.logic.model.dao.repositories.security.UserRepository;
import ru.schoolarlife.mail.interfaces.MailComposer;
import ru.schoolarlife.mail.interfaces.MailSender;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;

/**
 * @author val.rudi
 */
@Controller
public class SecuredController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    UserActivationRepository userActivationRepository;

    @Autowired
    ActivationCodeEncoder activationCodeEncoder;

    @Autowired
    private MailSender mailSender;

    @Autowired
    private MailComposer mailComposer;

    @RequestMapping(value = "/security/register", method = RequestMethod.GET)
    public String registration(Model model) throws NoSuchAlgorithmException {
        model.addAttribute("userForm", new User());

        return "security/register";
    }

    @RequestMapping(value = "/security/register", method = RequestMethod.POST)
    public String registration(@ModelAttribute("userForm") User userForm, BindingResult bindingResult, Model model) throws NoSuchAlgorithmException {



        userValidator.validate(userForm, bindingResult);

        if (bindingResult.hasErrors()) {
            return "security/register";
        }

        if(userForm.getRoles() == null || userForm.getRoles().size() <= 0)
        {
            Role defaultRole = roleRepository.findByName("ROLE_PARENT");
            if (defaultRole == null)
            {
                defaultRole = new Role();
                defaultRole.setName("ROLE_PARENT");
                defaultRole = roleRepository.save(defaultRole);
            }
            Set<Role> roleSet = new HashSet<>();
            roleSet.add(defaultRole);
            userForm.setRoles(roleSet);
        }
        userRepository.save(userForm);

        if(userForm.getId() <= 0)
        {
            model.addAttribute("savefailed", "Failed to save new user");
            return "security/register";
        }
        //securityService.autologin(userForm.getEmail(), userForm.getPasswordConfirm());

        String md = activationCodeEncoder.md5ActivationString(userForm.getEmail());

        UserActivation userActivation = new UserActivation(userForm, md);
        userActivationRepository.save(userActivation);

        String activationUrl = "http://localhost:8080/security/activation/" + md;

        String activationMailMessage = mailComposer.getComfirmationMailForUser(userForm, activationUrl);
        mailSender.sendMailTo(userForm.getEmail(), "Activation link", activationMailMessage);

        return "redirect:/security/registerconfirm";
    }

    @RequestMapping(value = "/security/registerconfirm", method = RequestMethod.GET)
    public String registrationconfirmation(Model model)
    {
        return "security/registerconfirm";
    }

    @RequestMapping(value = "/security/activation/{activationCode}", method = RequestMethod.GET)
    public String activation(@PathVariable("activationCode") String id)
    {
        UserActivation userActivation =  userActivationRepository.findByActivationCode(id);
        if (userActivation != null)
        {
            if(userActivation.getUser() != null)
            {
                User user = userActivation.getUser();
                user.setActive(true);
                userRepository.save(user);

                userActivationRepository.delete(userActivation);
            }
        }
        return "redirect:/main";
    }


    @RequestMapping(value = "/security/login", method = RequestMethod.GET)
    public String login(Model model, String error, String logout) {
        model.addAttribute("userForm", new User());
        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");

        return "security/login";
    }


    /*@RequestMapping(value = {"/", "/main"}, method = RequestMethod.GET)
    public String welcome(Model model) {
        return "main";
    }*/

}
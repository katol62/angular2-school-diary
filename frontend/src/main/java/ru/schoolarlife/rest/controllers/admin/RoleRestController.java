package ru.schoolarlife.rest.controllers.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.schoolarlife.logic.bo.security.Role;
import ru.schoolarlife.logic.model.dao.services.RoleService;

import java.util.List;

/**
 * Created by victor on 28.04.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/role")
public class RoleRestController extends BaseAdminRestController {

    @Autowired
    RoleService roleService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<Role>> getAllRoles() {

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        List<Role> roles = roleService.getAllRoles();
        if (roles.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Role>>(roles, headers, HttpStatus.OK);
    }
}

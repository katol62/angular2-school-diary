package ru.schoolarlife.web.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by victor on 22.11.16.
 */
@Controller
@RequestMapping("/error")
public class ErrorController {

    @GetMapping("/403")
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public String error403() {
        return "403";
    }

    @GetMapping("/404")
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String error404() {
        return "error/page_404";
    }

    @GetMapping("/500")
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String error500() {
        return "error/page_500";
    }
}

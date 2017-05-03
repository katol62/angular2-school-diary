package ru.schoolarlife.rest.controllers.unsecure;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.schoolarlife.logic.bo.unsecure.PublicNews;
import ru.schoolarlife.logic.model.dao.services.PublicNewsService;
import ru.schoolarlife.logic.util.CustomErrorType;

import java.util.List;

/**
 * Created by victor on 03.05.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/frontpage/publicnews")
public class PublicNewsRestService {

    public static final Logger logger = LoggerFactory.getLogger(PublicNewsRestService.class);

    @Autowired
    PublicNewsService publicNewsService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<PublicNews>> getAllPublicNews() {

        List<PublicNews> publicNewses = publicNewsService.getAllPublicNews();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (publicNewses.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<PublicNews>>(publicNewses, headers, HttpStatus.OK);
    }

    @GetMapping("/{publicNewsId}")
    public ResponseEntity<?> getPublicNews(@PathVariable("publicNewsId") Long publicNewsId) {
        logger.info("Fetching PublicNews with ID {}", publicNewsId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        PublicNews user = publicNewsService.getOne(publicNewsId);

        if (user == null) {
            logger.error("PublicNews with ID {} not found.", publicNewsId);
            return new ResponseEntity<>(new CustomErrorType("PublicNews with ID " + publicNewsId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<PublicNews>(user, headers, HttpStatus.OK);
    }
}

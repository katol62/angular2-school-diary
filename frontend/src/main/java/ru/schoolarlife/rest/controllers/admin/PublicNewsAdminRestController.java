package ru.schoolarlife.rest.controllers.admin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import ru.schoolarlife.logic.bo.unsecure.PublicNews;
import ru.schoolarlife.logic.model.dao.services.PublicNewsService;
import ru.schoolarlife.logic.util.CustomErrorType;

/**
 * Created by victor on 03.05.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/publicnews")
public class PublicNewsAdminRestController extends BaseAdminRestController {

    public static final Logger logger = LoggerFactory.getLogger(PublicNewsAdminRestController.class);

    @Autowired
    PublicNewsService publicNewsService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<?> createPublicNews(@RequestBody PublicNews publicNews, UriComponentsBuilder ucBuilder) {
        logger.info("Creating PublicNews : {}", publicNews);

        publicNews = publicNewsService.save(publicNews);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<PublicNews>(publicNews, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updatePublicNews(@PathVariable("id") long id, @RequestBody PublicNews publicNews) {
        logger.info("Updating PublicNews with id {}", id);

        PublicNews currentNews = publicNewsService.getOne(id);

        if (currentNews == null) {
            logger.error("Unable to update. PublicNews with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. PublicNews with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }


        publicNews = publicNewsService.save(publicNews);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<PublicNews>(publicNews, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deletePublicNews(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting PublicNews with id {}", id);

        PublicNews publicNews = publicNewsService.getOne(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (publicNews == null) {
            logger.error("Unable to delete. PublicNews with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. PublicNews with id " + id + " not found."),
                    headers, HttpStatus.NOT_FOUND);
        }

        publicNewsService.delete(publicNews.getId());

        return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
    }
}

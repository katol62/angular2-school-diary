package ru.schoolarlife.rest.controllers.admin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import ru.schoolarlife.logic.bo.unsecure.GameCategory;
import ru.schoolarlife.logic.model.dao.services.GameCategoryService;
import ru.schoolarlife.logic.util.CustomErrorType;

/**
 * Created by victor on 09.07.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/gamecategory")
public class GameCategoryAdminRestController extends BaseAdminRestController {
    public static final Logger logger = LoggerFactory.getLogger(GameCategoryAdminRestController.class);

    @Autowired
    GameCategoryService gameCategoryService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<?> createGameCategory(@RequestBody GameCategory gameCategory, UriComponentsBuilder ucBuilder) {
        logger.info("Creating GameCategory : {}", gameCategory);

        gameCategory = gameCategoryService.save(gameCategory);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<GameCategory>(gameCategory, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateGameCategory(@PathVariable("id") long id, @RequestBody GameCategory gameCategory) {
        logger.info("Updating Game with id {}", id);

        GameCategory currentGameCategory = gameCategoryService.getOne(id);

        if (currentGameCategory == null) {
            logger.error("Unable to update. GameCategory with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. GameCategory with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }


        gameCategory = gameCategoryService.save(gameCategory);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<GameCategory>(gameCategory, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteGameCategory(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting GameCategory with id {}", id);

        GameCategory gameCategory = gameCategoryService.getOne(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (gameCategory == null) {
            logger.error("Unable to delete. GameCategory with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. GameCategory with id " + id + " not found."),
                    headers, HttpStatus.NOT_FOUND);
        }

        gameCategoryService.delete(id);

        return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
    }
}

package ru.schoolarlife.rest.controllers.admin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import ru.schoolarlife.logic.bo.unsecure.Game;
import ru.schoolarlife.logic.model.dao.services.GameService;
import ru.schoolarlife.logic.util.CustomErrorType;

/**
 * Created by victor on 03.05.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/game")
public class GameAdminRestController extends BaseAdminRestController {
    public static final Logger logger = LoggerFactory.getLogger(GameAdminRestController.class);

    @Autowired
    GameService gameService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<?> createGame(@RequestBody Game game, UriComponentsBuilder ucBuilder) {
        logger.info("Creating Game : {}", game);

        game = gameService.save(game);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Game>(game, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateGame(@PathVariable("id") long id, @RequestBody Game game) {
        logger.info("Updating Game with id {}", id);

        Game currentGame = gameService.getOne(id);

        if (currentGame == null) {
            logger.error("Unable to update. Game with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. Game with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }


        game = gameService.save(game);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        return new ResponseEntity<Game>(game, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteGame(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting Game with id {}", id);

        Game game = gameService.getOne(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (game == null) {
            logger.error("Unable to delete. Game with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to delete. Game with id " + id + " not found."),
                    headers, HttpStatus.NOT_FOUND);
        }

        gameService.delete(game.getId());

        return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
    }
}

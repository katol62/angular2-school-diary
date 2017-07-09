package ru.schoolarlife.rest.controllers.unsecure;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.schoolarlife.logic.bo.unsecure.Game;
import ru.schoolarlife.logic.model.dao.services.GameService;
import ru.schoolarlife.logic.util.CustomErrorType;

import java.util.List;
import java.util.Set;

/**
 * Created by victor on 03.05.17.
 */
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/frontpage/game")
public class GameRestController {

    public static final Logger logger = LoggerFactory.getLogger(GameRestController.class);

    @Autowired
    GameService gameService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<Game>> getAllGames() {

        List<Game> games = gameService.getAllPublicGames();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (games.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Game>>(games, headers, HttpStatus.OK);
    }

    @GetMapping("/category/{gameId}")
    public ResponseEntity<Set<Game>> getGamesForCategory(@PathVariable("categoryId") Long categoryId) {
        logger.info("Fetching Games with category ID {}", categoryId);

        Set<Game> games = gameService.getAllGamesForCategory(categoryId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        if (games.isEmpty()) {
            return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<Set<Game>>(games, headers, HttpStatus.OK);
    }

    @GetMapping("/{gameId}")
    public ResponseEntity<?> getGame(@PathVariable("gameId") Long gameId) {
        logger.info("Fetching Game with ID {}", gameId);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");

        Game game = gameService.getOne(gameId);

        if (game == null) {
            logger.error("Game with ID {} not found.", gameId);
            return new ResponseEntity<>(new CustomErrorType("Game with ID " + gameId + " not found"), headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Game>(game, headers, HttpStatus.OK);
    }
}

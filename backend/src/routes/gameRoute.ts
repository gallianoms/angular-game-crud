import { Router } from "express";
import gameController from "../controllers/gameController";

class GameRoute {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.route('/')
            .get(gameController.getGames)
            .post(gameController.addGame)

        this.router.route('/:id')
        .get(gameController.getGame)
        .put(gameController.editGame)
        .delete(gameController.deleteGame)
    }
}

const gameRoute = new GameRoute;

export default gameRoute.router;
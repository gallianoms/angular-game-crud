"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = __importDefault(require("../controllers/gameController"));
class GameRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.route('/')
            .get(gameController_1.default.getGames)
            .post(gameController_1.default.addGame);
        this.router.route('/:id')
            .get(gameController_1.default.getGame)
            .put(gameController_1.default.editGame)
            .delete(gameController_1.default.deleteGame);
    }
}
const gameRoute = new GameRoute;
exports.default = gameRoute.router;

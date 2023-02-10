"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = __importDefault(require("../models/game"));
class GameController {
    getGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield game_1.default.find();
            res.json(games);
        });
    }
    getGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oneGame = yield game_1.default.findById(id);
            res.json(oneGame);
        });
    }
    addGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, image } = req.body;
            const game = new game_1.default({ title, description, image });
            yield game.save();
            res.json({
                message: "game added"
            });
        });
    }
    editGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, description, image } = req.body;
            yield game_1.default.findByIdAndUpdate(id, { title, description, image });
            res.json({
                message: "game updated"
            });
        });
    }
    deleteGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield game_1.default.findByIdAndDelete(id);
            res.json({
                message: "game deleted"
            });
        });
    }
}
const gameController = new GameController();
exports.default = gameController;

import { Request, Response } from "express";

import Game from "../models/game";

class GameController {
  public async getGames(req: Request, res: Response): Promise<void> {
    const games = await Game.find();
    res.json(games);
  }

  public async getGame(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const oneGame = await Game.findById(id);
    res.json(oneGame);
  }

  public async addGame(req: Request, res: Response): Promise<void> {
    const { title, description, image } = req.body;
    const game = new Game({ title, description, image });
    await game.save();
    res.json({
      message: "game added"
    });
  }

  public async editGame(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { title, description, image } = req.body;
    await Game.findByIdAndUpdate(id, { title, description, image });
    res.json({
      message: "game updated"
    });
  }

  public async deleteGame(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await Game.findByIdAndDelete(id);
    res.json({
      message: "game deleted"
    });
  }
}

const gameController = new GameController();

export default gameController;

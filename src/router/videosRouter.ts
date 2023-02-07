import express  from "express";
import { VideosController } from "../controller/VideosController";

export const VideosRouter = express.Router()

const videosController = new VideosController

VideosRouter.get('/videos', videosController.getVideos);
VideosRouter.post('/videos', videosController.creatVideos);
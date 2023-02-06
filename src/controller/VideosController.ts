import { Request, Response } from "express";
import { VideoBusiness } from "../business/videoBusiness";
import { VideoDatabes } from "../database/VideoDatabase";
import { Video } from "../models/Video";

export class VideosController {

    public getVideos = async (req: Request, res: Response) => {
        try {
    
            const getVideos = new VideoBusiness
            const video = await getVideos.getVideos()
    
            res.status(200).send(video);

        } catch (error:any) {
            if (res.status(200)) {
                res.status(500)
            }
            res.status(400).send(error.message)
        }
    };

    public creatVideos = async (req: Request, res: Response) => {
        try {

            const {id, title, duration} = req.body;

            const input = {
                id,
                title,
                duration
            }
    
           const newVideo = new VideoBusiness;
           await newVideo.createVideos(input)
            
            res.status(200).send('Novo vídeo adicionado!');
        } catch (error:any) {
            if (res.status(200)) {
                res.status(500)
            }
            res.status(400).send(error.message)
        }
    }
}
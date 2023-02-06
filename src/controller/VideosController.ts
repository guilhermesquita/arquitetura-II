import { Request, Response } from "express";
import { VideoDatabes } from "../database/VideoDatabase";
import { Video } from "../models/Video";

export class VideosController {

    public getVideos = async (req: Request, res: Response) => {
        try {
    
            const videos = new VideoDatabes()
            const videoDatas = await videos.getVideos()
    
            const video: Video[] = videoDatas.map((videoData) => new Video(
                videoData.id,
                videoData.title,
                videoData.duration,
                videoData.upload_data
            ))
    
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
    
            const {id, title, duration} = req.body
    
            const video = new Video (
                id,
                title,
                duration,
                new Date().toISOString()
            )
    
            const newVideoDb = {
                id: video.getId(),
                title: video.getTitle(),
                duration: video.getDuration(),
                upload_data: video.getUploadDate()
            }
    
            const newVideo = new VideoDatabes()
            await newVideo.insertVideos(newVideoDb)
            
            res.status(200).send('Novo vídeo adicionado!');
        } catch (error:any) {
            if (res.status(200)) {
                res.status(500)
            }
            res.status(400).send(error.message)
        }
    }
}
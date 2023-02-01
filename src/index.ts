import express, { Request, Response } from 'express'
import cors from 'cors'
import { Video } from './models/Video';
import { VideoDatabes } from './database/VideoDatabase';

const app = express();

app.use(express.json())//MIDDLEWARES CONFIGURATION RESPONSE IN JSON
app.use(cors());//MIDDLEWARES CONFIGURATION CORS

app.listen(3003, ()=>{ //CONFIGURING IN PORT 3003
    console.log('rodando na porta 3003!');
})

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong')
});


app.get('/videos', async (req: Request, res: Response) => {
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
});

app.post('/videos', async (req: Request, res: Response) => {
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
});
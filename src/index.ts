import express, { Request, Response } from 'express'
import cors from 'cors'
import {  VideosController } from './controller/VideosController';
import { VideosRouter } from './router/videosRouter';

const app = express();
const videosController = new VideosController()

app.use(express.json())//MIDDLEWARES CONFIGURATION RESPONSE IN JSON
app.use(cors());//MIDDLEWARES CONFIGURATION CORS

app.listen(3003, ()=>{ //CONFIGURING IN PORT 3003
    console.log('rodando na porta 3003!');
})

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong')
});

app.use('/users',VideosRouter)
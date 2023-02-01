import { BaseDatabase } from "./BaseDatabase"

export class VideoDatabes extends BaseDatabase{
    
    public static TABLE_VIDEOS = "videos"

    public async getVideos(){
        const videosDB = await BaseDatabase.connection('videos');
        return videosDB
    }

    public async insertVideos(newVideoDb:{}){
        const videosDB = await BaseDatabase.connection('videos').insert(newVideoDb)
        return videosDB
    }

}
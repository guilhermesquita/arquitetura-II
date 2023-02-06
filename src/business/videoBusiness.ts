import { VideoDatabes } from "../database/VideoDatabase"
import { Video } from "../models/Video"

export class VideoBusiness {

    public async getVideos() {
        const videos = new VideoDatabes()
        const videoDatas = await videos.getVideos()

        const video: Video[] = videoDatas.map((videoData) => new Video(
            videoData.id,
            videoData.title,
            videoData.duration,
            videoData.upload_data
        ))

        return video;
    };

    public async createVideos(input:any) {
        const {id, title, duration} = input
    
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
            return await newVideo.insertVideos(newVideoDb)

        }}
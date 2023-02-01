 export class Video {
    constructor(
        private id: string,
        private title: string,
        private duration: number,
        private uploadDate: string
    ){};

    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    };


    public getTitle(): string {
        return this.title;
    }
    public setTitle(value: string) {
        this.title = value;
    };


    public getDuration(): number {
        return this.duration;
    }
    public setDuration(value: number) {
        this.duration = value;
    };

    public getUploadDate(): string {
        return this.uploadDate;
    }
    public setUploadaDate(value: string) {
        this.uploadDate = value;
    };
}
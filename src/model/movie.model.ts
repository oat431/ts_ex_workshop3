import { BaseModel } from "../shared/base.model.js";
import { ReleaseDate } from "./release-date.model.js";
import { Comment } from "./comment.model.js";
import { MovieUtils } from "../utils/movie.interface.js";

export class Movie extends BaseModel implements MovieUtils {
    private title: string;
    private release: ReleaseDate;
    private comments: Comment[] = [];

    constructor(title: string, release: ReleaseDate, comments: Comment[] = []) {
        super(
            Math.floor(Math.random() * 1000),
            new Date(),
            new Date(),
        );
        this.title = title;
        this.release = release;
        this.comments = comments;
    }
    getAvgRate(): number {
        return this.comments.reduce((acc, comment) => acc + comment.getRate(), 0) / this.comments.length;
    }
    getTotalComments(): number {
        return this.comments.length;
    }

    public getId(): number {
        if (this.id === undefined) {
            throw new Error("ID is undefined");
        }
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getRelease(): ReleaseDate {
        return this.release;
    }

    public setRelease(release: ReleaseDate): void {
        this.release = release;
    }

    public getComments(): Comment[] {
        return this.comments;
    }

    public addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}
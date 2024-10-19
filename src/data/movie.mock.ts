import { Movie } from "../model/movie.model.js";
import { Comment } from "../model/comment.model.js";

function mockMovie(): Movie[] {
    return [
        new Movie("The Shawshank Redemption", { year: 1994, month: 10, day: 14 }, movkComment()),
        new Movie("The Godfather", { year: 1972, month: 3, day: 24 }, movkComment()),
        new Movie("The Dark Knight", { year: 2008, month: 7, day: 18 }, movkComment()),
        new Movie("The Lord of the Rings: The Return of the King", { year: 2003, month: 12, day: 17 }, movkComment()),
        new Movie("Pulp Fiction", { year: 1994, month: 10, day: 14 }, movkComment()),
        new Movie("Forrest Gump", { year: 1994, month: 7, day: 6 }, movkComment()),
        new Movie("Inception", { year: 2010, month: 7, day: 16 }, movkComment()),
        new Movie("The Matrix", { year: 1999, month: 3, day: 31 }, movkComment()),
        new Movie("The Silence of the Lambs", { year: 1991, month: 2, day: 14 }, movkComment()),
        new Movie("The Lord of the Rings: The Fellowship of the Ring", { year: 2001, month: 12, day: 19 }, movkComment()),
    ]
}

function movkComment(): Comment[] {
    const length = Math.floor(Math.random() * 5);
    const comments: Comment[] = [];
    for(let i = 0; i < length; i++) {
        comments.push(new Comment(`Comment ${i}`, Math.floor(Math.random() * 5) + 1));
    }
    return comments;
}

export { mockMovie }
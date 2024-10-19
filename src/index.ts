import express, { urlencoded, json } from "express";
import { mockMovie } from "./data/movie.mock.js";
import { Comment } from "./model/comment.model.js";

const port = process.env.PORT || 8080;
const app = express();
const movies = mockMovie();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Server is up and running" });
});

app.get("/movies", (req, res) => {
    res.status(200).json(movies);
});

app.get("/movies/:id", (req, res) => {
    const { id } = req.params;
    const movie = movies.find((movie) => movie.getId() === Number(id));

    if (!movie) {
        res.status(404).json({ msg: "Movie not found" });
    }

    res.status(200).json(movie);
});

app.get("/movies/:id/avg", (req, res) => {
    const { id } = req.params;
    const movie = movies.find((movie) => movie.getId() === Number(id));
    if(!movie) {
        res.status(404).json({ msg: "Movie not found" });
    }

    res.status(200).json({ avg: movie?.getAvgRate().toFixed(2) });
});

app.post("/movies/:id/comment", (req, res) => {
    const { id } = req.params;
    const comment = req.body;
    const movie = movies.find((movie) => movie.getId() === Number(id));

    if (!movie) {
        res.status(404).json({ msg: "Movie not found" });
        return;
    }

    const newComment = new Comment(comment.content, comment.rate);

    movie.addComment(newComment);
    res.status(200).json(movie);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
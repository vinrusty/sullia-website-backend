import express,{ Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hell");
})

app.listen("3001", () => {
    console.log("listening at 3001")
})
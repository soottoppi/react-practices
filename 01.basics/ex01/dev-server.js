import http from "http";
import * as path from "path";
import express from "express";

const port = 8080;

// Appication Setup
const application = express().use(express.static(path.join(path.resolve("."), "public")));

// Server Setup
http.createServer(application)
    .on("listening", function () {
        console.info(`http server runs on ${port}`);
    })
    .listen(port);

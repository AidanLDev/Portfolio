const express = require("express");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const fs = require("fs");
const https = require("https");

const cert = fs.readFileSync("./certs/aidanlowson_com.crt");
const ca = fs.readFileSync("./certs/aidanlowson_com.ca-bundle");
const key = fs.readFileSync("./certs/aidanlowson.key");

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;
const hostname = "aidanlowson.com";

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));

  // Answer API requests.
  app.get("/api", function(req, res) {
    res.set("Content-Type", "application/json");
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get("*", function(request, response) {
    response.sendFile(
      path.resolve(__dirname, "../frontend/build", "index.html")
    );
  });

  app.listen(PORT, function() {
    console.error(
      `Node ${
        isDev ? "dev server" : "cluster worker " + process.pid
      }: listening on port ${PORT}`
    );
  });
}

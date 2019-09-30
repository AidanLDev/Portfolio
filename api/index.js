const express = require("express");
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");

const cert = fs.readFileSync(
  path.join(__dirname, "./certs", "/aidanlowson_com.crt")
);
const ca = fs.readFileSync(
  path.join(__dirname, "./certs", "/aidanlowson_com.ca-bundle")
);
const key = fs.readFileSync(
  path.join(__dirname, "./certs", "/aidanlowson.key")
);

const PORT = process.env.PORT || 5000;

const app = express();

//  X-Forwarded-Proto header field to be trusted so its value can be used to determine the portocol.
app.enable("trust proxy");

app.use(function(req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

const httpsOptions = {
  key: key,
  cert: cert,
  ca: ca
};

https
  .createServer(options, function(req, res) {
    res.end("Secure");
  })
  .listen(443);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// Answer API requests.
app.get("/api", function(req, res) {
  res.set("Content-Type", "application/json");
});

// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

http
  .createServer(httpsOptions, app)
  .listen(PORT, () =>
    console.log(`listening on port https://localhost:${PORT}`)
  );

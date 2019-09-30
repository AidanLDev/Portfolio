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

const PORT = process.env.PORT || 443;

const app = express();

//  X-Forwarded-Proto header field to be trusted so its value can be used to determine the portocol.
app.enable("trust proxy");

const httpsOptions = {
  key: key,
  cert: cert,
  ca: ca
};

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// Answer API requests.
app.get("/api", function(req, res) {
  res.set("Content-Type", "application/json");
});

// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
  // If statement
  console.log(request.headers);
  console.log(request.url);
  response.redirect("https://" + request.headers.host + request.url);
});

// app.get("*", function(request, response) {
//   response.redirect("https://" + request.headers.host + request.url);
// });

http
  .createServer(httpsOptions, app)
  .listen(PORT, () =>
    console.log(`listening on port https://localhost:${PORT}`)
  );

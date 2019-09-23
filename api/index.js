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

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 443;
const hostname = "aidanlowson.com";

const app = express();

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
  response.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

https
  .createServer(httpsOptions, app)
  .listen(PORT, () =>
    console.log(`listening on port https://localhost:${PORT}`)
  );

// app.listen(PORT, function() {
//   console.error(
//     `Node ${
//       isDev ? "dev server" : "cluster worker " + process.pid
//     }: listening on port http://localhost:${PORT}`
//   );
// });

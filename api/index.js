const express = require("express");
const path = require("path");
const fs = require("fs");
const https = require("https");
const PORT = process.env.PORT || 443;

const app = express();

const cert = fs.readFileSync(
  path.join(__dirname, "./certs", "/aidanlowson_com.crt")
);
const ca = fs.readFileSync(
  path.join(__dirname, "./certs", "/aidanlowson_com.ca-bundle")
);
const key = fs.readFileSync(
  path.join(__dirname, "./certs", "/aidanlowson.key")
);

//  X-Forwarded-Proto header field to be trusted so its value can be used to determine the portocol.
app.enable("trust proxy");

const httpsOptions = {
  key: key,
  cert: cert,
  ca: ca
};

// Priority serve any static files.
app.use(function(req, res, next) {
  if (req.protocol === "https") {
    express.static(path.resolve(__dirname, "../frontend/build"));
    next();
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

// Answer API requests.
app.get("/api", function(req, res) {
  res.set("Content-Type", "application/json");
});

app.get("*", function(req, res, next) {
  if (req.protocol === "https") {
    console.log("Secure, NO REDIRECT and send the app");
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
  } else {
    console.log("Redirect");
    res.redirect("https://" + req.headers.host + req.url);
  }
});

// All remaining requests return the React app, so it can handle routing.
// app.get("/", function(req, res) {
//   res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
// });

https
  .createServer(httpsOptions, app)
  .listen(PORT, () =>
    console.log(`listening on port http://localhost:${PORT}`)
  );

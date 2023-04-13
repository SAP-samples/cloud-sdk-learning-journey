const express = require("express");

const app = express();
app.get("/", function (req, res) {
  const title = process.env.TITLE;
  const a2url = process.env.A2URL;
  
  const page =
    "<!DOCTYPE html><html><body>" +
    "<h1>" +
    title +
    "</h1>" +
    '<p>Navigate to <a href="' +
    a2url +
    '">Application 2</a></p>' +
    "</body></html>";

  res.send(page);
});

const port = process.env.PORT || 3002;
console.log(`App1 is running on port: ${port}`);
app.listen(port);

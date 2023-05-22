import express from "express";
import hbs from "hbs";
import { sendPreviewMail } from "./sendEmail.js";
// Create the Express application
const app = express();

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set the view engine to use Handlebars
app.set("view engine", "hbs");

// app.use(express.static("Templates"));

// Specify the path to the views directory
app.set("views", __dirname + "/views");

// Define a route for the home page
app.get("/", (req, res) => {
  res.render("index", { message: "Welcome to the server!" });
});

app.get("/sendemail/:path", (req, res) => {
  console.log("Send Email");
  sendPreviewMail("maheskumar.as@gmail.com", "text", "template_1");
  res.send({ status: "sent" });
});

// Start the server on port 8085
app.listen(8085, () => {
  console.log("Server is running on port 8085");
});

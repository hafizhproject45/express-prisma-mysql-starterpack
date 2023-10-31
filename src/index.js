const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const PORT = process.env.PORT;
dotenv.config();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`App Listen on port ${PORT}`);
});

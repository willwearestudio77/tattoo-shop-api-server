const express = require("express");

module.exports = function (app) {
  app.use(express.static("public"));
  app.use(express.json());

  const shops = [{ name: "two coins tattoo",location:"hitchin" }, { name: "stoy junx",location:"Athens" }];

  app.get("/api/v1/cars", (req, res) => {
    res.status(200).json(shops);
  });

  app.post("/api/v1/cars", (req, res) => {
    const newShop = req.body;
    cars.push(newShop);
    res.sendStatus(201);
  });
};
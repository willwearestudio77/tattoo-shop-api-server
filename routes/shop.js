const express = require("express");
const router = express.Router();
const {
  getShops,
  addShop,
  updateShop,
  removeShop,
} = require("../controller/shops");

router
  .get("/:id?", getShops)
  .post("/", addShop)
  .put("/:id", updateShop)
  .delete("/:id", removeShop);

module.exports = router;
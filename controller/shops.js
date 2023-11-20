const Shop = require("../models/shops");

exports.getShops = async function (req, res) {
  let query = {};

  if (req.params.id) {
    query._id = req.params.id;
  }

  try {
    const shops = await Shop.find(query);
    res.status(200).json(shops);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addShop = async function (req, res) {
  const shopData = req.body;

  try {
    const newShop = new Shop(shopData);
    const shop = newShop.save();
    return res.status(201).json(shop);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateShop = async function (req, res) {
  try {
    await Shop.updateOne({ _id: req.params.id }, req.body);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.removeShop = async function (req, res) {
  try {
    await Shop.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
};
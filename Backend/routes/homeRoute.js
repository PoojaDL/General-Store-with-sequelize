const express = require("express");

const storeController = require("../controller/store");

const router = express.Router();

router.post("/addItem", storeController.postItem);

router.get("/getItems", storeController.getItems);

router.get("/deleteItem/:id", storeController.deleteItem);

router.put("/updateItem/:id", storeController.updateItem);

module.exports = router;

const Store = require("../model/store");

exports.postItem = (req, res, next) => {
  console.log(req.body);
  const item = req.body.item;
  const description = req.body.description;
  const price = req.body.price;
  const quantity = req.body.quantity;
  Store.create({
    item: item,
    description: description,
    price: price,
    quantity: quantity,
  })
    .then((result) => {
      //   console.log(result);
      return res.json(result);
    })
    .catch((err) => console.log(err));
};

exports.getItems = (req, res, next) => {
  console.log("Get All Items");
  Store.findAll()
    .then((result) => {
      //   console.log(result);
      return res.json(result);
    })
    .catch((err) => console.log(err));
};

// exports.getUser = (req, res, next) => {
//   console.log("GetUser");
//   console.log(req.params.id);
//   User.findByPk(req.params.id)
//     .then((result) => {
//       console.log(result);
//       res.send(result);
//       return res.json(result);
//     })
//     .catch((err) => console.log(err));
// };

exports.deleteItem = (req, res, next) => {
  console.log("DeleteRequest");
  console.log(req.params.id);
  Store.findByPk(req.params.id)
    .then((product) => {
      const data = product.destroy();
      return data;
    })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.updateItem = (req, res, next) => {
  console.log("UpdateRequest");
  const updatedItem = req.body.item;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedQuantity = req.body.quantity;
  Store.findByPk(req.params.id)
    .then((product) => {
      product.item = updatedItem;
      product.price = updatedPrice;
      product.description = updatedDescription;
      product.quantity = updatedQuantity;
      return product.save();
    })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

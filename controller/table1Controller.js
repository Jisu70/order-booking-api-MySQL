// Dependencies
const Table1 = require("../model/table1.model.js");

// Module scaffolding
const app = {};

app.homePage = (req, res) => {
  res.end("Hello I am TableOne");
};

// To save the Expences in database
app.saveData = (req, res) => {
  const item = req.body.item;
  const amount = req.body.amount;
  const table = req.body.table
  Table1.create({
    item,
    amount,
    table
  })
    .then((result) => {
      console.log(" Expences Added ");
      res.json(result);
    })
    .catch((err) => console.log(err));
};

// To get all the expences
app.allExpences = (req, res) => {
  Table1.findAll()
    .then((exp) => {
      res.send(exp);
    })
    .catch((err) => console.error("Error fetching Expences:", err));
};

// To edit or update the expences
app.updateExpences = (req, res) => {
  const userId = req.body.id;
  const updatedItem = req.body.item;
  const updatedAmount = req.body.amount;

  Table1.findByPk(userId)
    .then((result) => {
      if (result) {
        console.log(" this is result", result);
        result.item = updatedItem;
        result.amount = updatedAmount;
        return result.save();
      } else {
        throw new Error("Cannot not edit");
      }
    })
    .then((result) => {
      console.log("Expences updated:", result);
      res.json({ message: "Expences updated successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred." });
    });
};

// To calculate the total expences
app.totalExpences = (req, res) => {
  Table1.findAll()
    .then((exp) => {
      return res.send(exp);
    })
    .catch((err) => console.error("Error fetching Expences:", err));
};

// To delete th expences
app.deleteExpences = (req, res) => {
  const id = req.body.id;
  Table1.findByPk(id)
    .then((item) => {
      if (item) {
        return item.destroy();
      } else {
        throw new Error("Item not found");
      }
    })
    .then(() => {
      console.log("Item DESTROYED");
      res.json({ message: "Item deleted successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred." });
    });
};

module.exports = app;

const productCollection = require("../models/product");

const addadminproductController = async (req, res) => {
  try {
    const { Pname, Price, Cat } = req.body;
    if (!Pname || !Price || !Cat) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const record = new productCollection({
      productName: Pname,
      productPrice: Price,
      productCategory: Cat,
    });
    await record.save();
    res.status(200).json({ message: "Successfully insert Product" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllProductController = async (req, res) => {
  try {
    const record = await productCollection.find();
    res.status(200).json({ data: record });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const productid = req.params.abc;
    await productCollection.findByIdAndDelete(productid);
    res.status(200).json({ message: "Successfully delete" });
  } catch (error) {
    res.status(500).json({ message: "internal server error " });
  }
};

const editvaluedataController = async (req, res) => {
  try {
    productId = req.params.abc;
    const record = await productCollection.findById(productId);
    res.status(200).json({ data: record });
  } catch (error) {
    res.status(500).json({ message: "internal server error " });
  }
};

const productUpdateController = async (req, res) => {
  try {
    const { Pname, Pprice, Cat, Pstatus } = req.body;
    const productId = req.params.abc;
    await productCollection.findByIdAndUpdate(productId, {
      productName: Pname,
      productPrice: Pprice,
      productCategory: Cat,
      productStatus: Pstatus,
    });
    res.status(200).json({ message: "Successfully Update" });
  } catch (error) {
    res.status(500).json({ message: "Inrernal server error" });
  }
};
module.exports = {
  addadminproductController,
  getAllProductController,
  deleteProductController,
  editvaluedataController,
  productUpdateController,
};

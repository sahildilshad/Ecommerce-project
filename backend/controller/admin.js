const productCollection = require("../models/product");
const queryCollection = require("../models/query");
const nodemailer = require("nodemailer");

const addadminproductController = async (req, res) => {
  try {
    console.log(req.body);
    const PImage = req.file.filename;

    const { Pname, Price, Cat } = req.body;
    if (!Pname || !Price || !Cat) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const record = new productCollection({
      productName: Pname,
      productPrice: Price,
      productCategory: Cat,
      productImage: PImage,
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

const userAllQueryController = async (req, res) => {
  try {
    const record = await queryCollection.find();
    res.status(200).json({ data: record });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const queryDeleteController = async (req, res) => {
  try {
    const queryId = req.params.abc;
    await queryCollection.findByIdAndDelete(queryId);
    res.status(200).json({ message: "Successfully delete." });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

const querySingleDataController = async (req, res) => {
  try {
    const queryId = req.params.abc;
    const record = await queryCollection.findById(queryId);
    res.status(200).json({ data: record });
  } catch (error) {}
};

const mailreplyController = async (req, res) => {
  try {const { to, sub, body } = req.body;
  const queryId = req.params.abc;

  // Create a test account or replace with real credentials.
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "sahildilshad782@gmail.com",
      pass: "eocd jjcx kjek zwuf",
    },
  });

  const info = transporter.sendMail({
    from: '"Shopora" <sahildilshad782@gmail.com>',
    to: to,
    subject: sub,
    text: body, // plain‑text body
    html: body, // HTML body
  });

 await queryCollection.findByIdAndUpdate(queryId,{
    queryStatus:"Read"
  })
  res.status(200).json({ message: "Successfully reply." });
    
  } catch (error) {
      res.status(500).json({ message: "internal server error " });
    
  }
  

};

module.exports = {
  addadminproductController,
  getAllProductController,
  deleteProductController,
  editvaluedataController,
  productUpdateController,
  userAllQueryController,
  queryDeleteController,
  querySingleDataController,
  mailreplyController,
};

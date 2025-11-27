const { response } = require("express");
const userCollection = require("../models/user");
const bcrypt = require("bcrypt");
const productCollection = require("../models/product");
const queryCollection = require("../models/query");

const regDataController = async (req, res) => {
  try {
    const { fullname, email, pass } = req.body;
    if (!fullname || !email || !pass) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const hashPassword = await bcrypt.hash(pass, 10);
    const emailexit = await userCollection.findOne({ userEmail: email });
    if (emailexit) {
      return res.status(400).json({ message: "email already register." });
    }
    const record = new userCollection({
      userName: fullname,
      userEmail: email,
      userPass: hashPassword,
    });
    await record.save();
    res.status(200).json({ message: "Successfully resgister" });
  } catch (error) {
    res.status(500).json({ message: "Invalid server error" });
  }
};

const loginDataController = async (req, res) => {
  try {
    const { loginEmail, loginPass } = req.body;
    const userCheck = await userCollection.findOne({ userEmail: loginEmail });
    if (!userCheck) {
      return res.status(400).json({ message: "user not found" });
    }
    const matchPass = await bcrypt.compare(loginPass, userCheck.userPass);
    if (!matchPass) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Successfully login" });
  } catch (error) {
    res.status(500).json({ message: "Invalid server error" });
  }
};

const userProductController = async (req, res) => {
  try {
    const category = req.query.category;
    let filter = { productStatus:"In-Stock" };
    if (category && category.toLowerCase() !== "all") {
      filter.productCategory = category.toLowerCase();
    }
    const record = await productCollection.find(filter);

    // const record = await productCollection.find();
    res.status(200).json({ data: record });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const userQueryController = async (req, res) => {
  try {
    const { userName, userEmail, userQuery } = req.body;
    const record = new queryCollection({
      Name: userName,
      Email: userEmail,
      Query: userQuery,
    });

    await record.save();
    res.status(200).json({ message: "successfully submit your query" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  regDataController,
  loginDataController,
  userProductController,
  userQueryController,
};

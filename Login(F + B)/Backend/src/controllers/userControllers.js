const User = require("../models/userdata");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const postdata = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  const newdata = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  await newdata.save();

  console.log(newdata);

  res.json({
    message: newdata,
    status: "Data got successfully",
  });
};

const getalldata = async (req, res) => {
  try {
    const allUsersdata = await User.find({}).select("-password");

    res.status(200).json({
      message: "All users fetched successfully",
      data: allUsersdata
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const passwordCheck = await bcrypt.compare(
      password,
      findUser.password
    );

    if (!passwordCheck) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

     const token = jwt.sign(
      { id: findUser._id },
      "vasu12345",   
     
    );


    res.cookie("token", token);

    res.status(200).json({
      message: `${findUser.firstName} Login successfully`
    });

  } catch (e) {
    res.status(500).json({
      message: "Something went wrong",
      error: e.message
    });
  }
};

const logout = async (req, res) => {
  try {

    const token = req.cookies.token;   
    console.log(token);

    res.clearCookie("token");

    res.status(200).json({
      message: "Logout successful"
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
};



module.exports = {
  postdata,
  getalldata,
  login,
  logout
};
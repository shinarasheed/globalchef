const User = require("../models/userModel");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message
    });
  }
};

exports.changeUserRole = async (req, res) => {
  try {
    if (!req.body.role)
      return res.status(403).json({ msg: "please update role" });

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        role: req.body.role
      },
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      status: "success",
      msg: "user role updated updated!!",
      data: {
        user
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message
    });
  }
}; 

exports.updateMe = async (req, res) => {
  try {
    if (req.body.password || req.body.passwordConfirm) {
      return res.status(400).json({
        msg:
          "This route is not for password update please use /updateMypassword"
      });
    }

    const filterBody = filterObj(
      req.body,
      "name",
      "email",
      "photo",
      "bio",
      "location",
      "youtube",
      "twitter",
      "facebook",
      "linkedin",
      "instagram",
      "phoneNUmber"
    );
    const user = await User.findByIdAndUpdate(req.user._id, filterBody, {
      new: true,
      runValidators: true
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message
    });
  }
};

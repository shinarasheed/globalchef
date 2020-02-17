const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please input a name "]
    // unique: true
  },

  email: {
    type: String,
    required: [true, "Please input an email"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Provide a vaild Email"]
  },

  photo: String,

  role: {
    type: String,
    enum: ["user", "instructor", "admin"],
    default: "user"
  },

  password: {
    type: String,
    required: [true, "Please provide  a password "],
    minlength: 8,
    select: false
  },

  location: {
    type: String
  },

  passwordchangedat: {
    type: Date
  },

  passwordResetToken: String,
  passwordResetExpires: Date,

  active: {
    type: Boolean,
    default: true,
    select: false
  },

  avatar: {
    type: String
  },

  bio: {
    type: String
  },

  phoneNUmber:{
    type: String
  },

  youtube: {
    type: String
  },
  twitter: {
    type: String
  },
  facebook: {
    type: String
  },
  linkedin: {
    type: String
  },
  instagram: {
    type: String
  },
  datecreated: {
    type: Date,
    default: Date.now
  },
  newsLetters: {
    type: Boolean,
  }
});

// Document pre-middleware
UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();

  // if(req.body.password === req.body.passwordConfirm){
  //     return res.status(401).json({msg: 'you can not use your name as password'})

  // }

  // hash the password
  this.password = await bcrypt.hash(this.password, 12);
  // delete the passwordConfirmed field
  this.passwordConfirm = undefined;
});

UserSchema.pre("save", function(next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordchangedat = Date.now() - 1000;

  next();
});

// CHECK IF USER CHANGED PASSWORD After token was issued : instance method : available on all document of the user model

UserSchema.methods.changedPasswordAfter = function(jwtTimeStamp) {
  if (this.passwordchangedat) {
    const changeTimeStamp = parseInt(
      this.passwordchangedat.getTime() / 1000,
      10
    );
    return jwtTimeStamp < changeTimeStamp;
  }

  return false;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

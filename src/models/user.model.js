/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 7,
      required: true,
    },
    role: {
      id: {
        type: Number,
        default: 0,
      },
      roleName: {
        type: String,
        trim: true,
        lowercase: true,
        default: 'user',
      },
    },
    targetPoint: {
      type: Number,
    },
    name: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    gender: {
      type: String,
    },
    avatar: {
      type: String,
    },
    tenRecentWords: [
      {
        _id: false,
        newWord: {
          type: String,
          lowercase: true,
          trim: true,
        },
        meaning: {
          type: String,
          required: true,
        },
      },
    ],
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, process.env.JWT_SECRET);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }

  next();
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;

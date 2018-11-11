const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const User = mongoose.model("User");


exports.authenticate = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ email });

      //Match Password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (! isMatch) throw 'Password did not match'; {
          resolve(user);
        }  
      });
    } catch (err) {
      reject("Authentication Failed");
    }
  });
};
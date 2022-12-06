const mongoose = require("mongoose")
const {db , UserSchema , TestScema} = require("./config")
  
  const Test = mongoose.model("tests" , TestScema)
  const User = mongoose.model("users" , UserSchema);
  
module.exports = {
    Test , User
}
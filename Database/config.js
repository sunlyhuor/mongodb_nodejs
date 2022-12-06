const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://Sunlyhuor:Huor1234@cluster0.ywaf8df.mongodb.net/Test")
// mongoose.connect("mongodb://localhost:27017/Test")


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    age: {
      type: Number,
      default: 0,
    },
    hobbies :{
      type : [Object]
    }
  });
  
  const TestScema = new mongoose.Schema({
    name:{
      type:String,
      required:true,
      default:"TestName"
    },
    phone:{
      type:String,
      min:5,
      max:20
    }
  })

module.exports = {
    db,
    UserSchema,
    TestScema
}

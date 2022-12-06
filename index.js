const express = require("express")
const app = express()
const cors = require("cors")
const jsonData = require("./data.json")
const { Test , User } = require("./Database/Schema")

app.use(cors({
  origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))



async function TestShow(){
  let data = await Test.find({})
  console.log(data)
} 
// TestShow()
async function run () { 
  let data = await User.find({})
  console.log(data[0]._id)
 }
//  run()
// add()
 async function add(){
  try {
    let data = await User.create({name:"Sunlyhong" , age:20 , hobbies: ["Football" , "Volleyball"] })
    return data
  } catch (error) {
    console.log(error)
  }
 }

 async function update(){
  try{
    let update = await User.updateOne({name:"Sunleehuor"} , {$set:{name:"Sunlyhuor"}})
    // console.log(update)
  }
  catch(er){
    console.log(er)
  }

 }

 
 const FindUser = async ()=>{
   try {
     let data = await User.findById("634f608924f844c903ef5081")
     console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  // FindUser()


let port = process.env.PORT || 3000
app.get("/users", async (request, response) => {
  let data = await User.aggregate(
    [
      {
        $lookup:{
          from:"items",
          localField:"items.itemId",
          foreignField:"_id",
          as:"items"
        }
      }
    ]
  )
  response.send(data)
});

app.listen(2000 , ()=>{
    console.log("run on port : " + port)
})
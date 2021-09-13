const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/userapi",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is successfull")
}).catch((e)=>{
    console.log("No conection" , e)
})


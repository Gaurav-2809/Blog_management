import mongoose from 'mongoose';


const Connection = async ()=>{
    const URL='mongodb://localhost:27017/blog_post';
    try{
       await mongoose.connect(URL,{useNewUrlParser: true})
       console.log("Database connected successfully.")
    }catch(error){
        console.log(error); 
    }
}
export default Connection;
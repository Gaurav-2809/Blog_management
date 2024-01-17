import User from '../model/user.js'
export const signupUser= async (request, response)=>{
    try{
        const user=request.body;
        const newuser=new User(user);
        await newuser.save();
        return response.status(200).json({msg:"signup successfully"});
    }catch(error){
        return response.status(500).json({msg:"Error while creating user"});
    }
}
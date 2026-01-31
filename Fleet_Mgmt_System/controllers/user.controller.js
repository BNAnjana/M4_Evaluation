import supabase from "../config/supabase.config.js";

export const signup = async(req,res) => {
    const {name, email, password,role} = req.body;
    const {data,error} = await supabase
    .from("user")
    .insert([{
        name,
        email,
        password,
        role
    }
    ])
    if(error) {
        return res.status(400).json({error:error.message})
    }
    res.json({message:"user created",data});
};
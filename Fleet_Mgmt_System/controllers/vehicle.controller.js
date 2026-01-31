import supabase from "../config/supabase.config";

export const createVehicle = async(req,res) => {
    const {name,registration_number,allowed_passengers,rate_per_km} = req.body;
    const{data,error} = await supabase
    .from("vehicle")
    .insert([{
        name,
        registration_number,
        allowed_passengers,
        rate_per_km,
        owner_id:req.id
    }]).select()
    if(error){
        return res.status(400).json({error});
    }
    res.json({message:"Vehicle created",data});
}

export const getVehicle = async(req,res) => {
    const {data,error} = await supabase
    .from("vehicle")
    .select("*")
    .eq("owner_id",req.id)

if(error){
        return res.status(400).json({error});
    }
    res.json(data);
}


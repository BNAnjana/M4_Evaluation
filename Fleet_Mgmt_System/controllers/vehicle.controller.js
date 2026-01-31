import supabase from "../config/supabase.config.js";

export const addVehicle = async(req,res) => {
    const {name,registration_number,allowed_passengers,rate_per_km,owner_id} = req.body;
    const{data,error} = await supabase
    .from("vehicle")
    .insert([{
        name,
        registration_number,
        allowed_passengers,
        rate_per_km,
        owner_id
    }])

    if(error){
        return res.status(400).json({error});
    }
    res.json({message:"Vehicle added",data});
};

export const getVehicle = async(req,res) => {
    const { vehicleId } = req.params;
    const {data,error} = await supabase
    .from("vehicles")
    .select("*")
    .eq("id",vehicleId)

if(error){
        return res.status(400).json({error});
    }
    res.json(data);
};

export const assignDriver = async (req, res) => {
  const { vehicleId } = req.params;
  const { driver_id } = req.body;

  const { data, error } = await supabase
    .from('vehicles')
    .update({ driver_id })
    .eq('id', vehicleId);

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json({ message: 'Driver assigned', vehicle: data[0] });
};
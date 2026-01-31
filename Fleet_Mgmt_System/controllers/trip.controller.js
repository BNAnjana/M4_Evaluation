import supabase from '../config/supabase.config.js';

export const createTrip = async (req, res) => {
  const { customer_id, vehicle_id, start_date, end_date, location, distance_km, passengers } = req.body;

  // Check vehicle availability
  const { data: vehicle, error: vError } = await supabase
    .from('vehicles')
    .select('*')
    .eq('id', vehicle_id)
    .single();

  if (vError || !vehicle) return res.status(400).json({ error: 'Vehicle not found' });
  if (!vehicle.isAvailable) return res.status(400).json({ error: 'Vehicle not available' });
  if (passengers > vehicle.allowed_passengers) return res.status(400).json({ error: 'Passenger limit exceeded' });

  const { data, error } = await supabase
    .from('trips')
    .insert([{ customer_id, vehicle_id, start_date, end_date, location, distance_km, passengers }]);

  if (error) return res.status(400).json({ error: error.message });

  // Mark vehicle unavailable
  await supabase.from('vehicles').update({ isAvailable: false }).eq('id', vehicle_id);

  res.status(201).json({ message: 'Trip created', trip: data[0] });
};

export const endTrip = async (req, res) => {
  const { tripId } = req.params;

  const { data: trip, error: tError } = await supabase
    .from('trips')
    .select('*')
    .eq('id', tripId)
    .single();

  if (tError || !trip) return res.status(400).json({ error: 'Trip not found' });

  const { data: vehicle } = await supabase
    .from('vehicles')
    .select('*')
    .eq('id', trip.vehicle_id)
    .single();

  const tripCost = trip.distance_km * vehicle.rate_per_km;

  const { data, error } = await supabase
    .from('trips')
    .update({ isCompleted: true, tripCost })
    .eq('id', tripId);

  if (error) return res.status(400).json({ error: error.message });

  await supabase.from('vehicles').update({ isAvailable: true }).eq('id', trip.vehicle_id);

  res.status(200).json({ message: 'Trip ended', trip: data[0] });
};
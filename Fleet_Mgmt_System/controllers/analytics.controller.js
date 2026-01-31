export async function getAnalytics(req, res) {
  const [customers, owners, drivers, vehicles, trips] = await Promise.all([
    supabase.from('users').select('*', { count: 'exact' }).eq('role','customer'),
    supabase.from('users').select('*', { count: 'exact' }).eq('role','owner'),
    supabase.from('users').select('*', { count: 'exact' }).eq('role','driver'),
    supabase.from('vehicles').select('*', { count: 'exact' }),
    supabase.from('trips').select('*', { count: 'exact' }),
  ]);

  res.json({
    total_customers: customers.count,
    total_owners: owners.count,
    total_drivers: drivers.count,
    total_vehicles: vehicles.count,
    total_trips: trips.count
  });
}
Table: trips
Columns:
- id: uuid (PK)
- customer_id: uuid (FK users.id)
- vehicle_id: uuid (FK vehicles.id)
- start_date: date NOT NULL
- end_date: date NOT NULL
- location: text NOT NULL
- distance_km: numeric NOT NULL
- passengers: int NOT NULL
- tripCost: numeric
- isCompleted: boolean DEFAULT false
- created_at: timestamp DEFAULT now()
Constraints:
- passengers <= vehicle.allowed_passengers
Relationships:
- customer_id -> users(id)
- vehicle_id -> vehicles(id)
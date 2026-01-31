Table: vehicles
Columns:
- id: uuid (PK)
- name: text NOT NULL
- registration_number: text UNIQUE NOT NULL
- allowed_passengers: int NOT NULL
- isAvailable: boolean DEFAULT true
- driver_id: uuid (FK users.id, nullable)
- rate_per_km: numeric NOT NULL
- owner_id: uuid (FK users.id) NOT NULL
- created_at: timestamp DEFAULT now()
Relationships:
- owner_id -> users(id)
- driver_id -> users(id)
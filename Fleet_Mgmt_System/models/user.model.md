Table: users
Columns:
- id: uuid (PK)
- name: text NOT NULL
- email: text UNIQUE NOT NULL
- password: text NOT NULL
- role: enum('customer','owner','driver') NOT NULL
- created_at: timestamp DEFAULT now()
Constraints:
- email UNIQUE
- role CHECK IN ('customer','owner','driver')
DROP TABLE IF EXISTS Employee;
CREATE TABLE Employee(
	id bigserial PRIMARY KEY NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	is_active BOOLEAN NOT NULL,
	date_of_birth DATE NOT NULL
);
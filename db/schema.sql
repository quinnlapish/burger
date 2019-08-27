DROP database IF exists burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT PRIMARY KEY auto_increment NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN	
);

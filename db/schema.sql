DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	burger_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR (30) NOT NULL,
    devoured TINYINT DEFAULT 0
);
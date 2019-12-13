create database if not exists BeerMe;

use BeerMe;
CREATE  TABLE IF NOT EXISTS `Users` (
  `user_id` int  Not Null  AUTO_INCREMENT ,
  `first_name` VARCHAR(150) NOT NULL ,
  `last_name` VARCHAR(150) NOT NULL ,
  `email` VARCHAR(255) ,
  `beers_tasted` VARCHAR(255),
  PRIMARY KEY (`user_id`) )
  ENGINE = InnoDB;

  show tables;
  select * from Users;

  INSERT INTO `Users` (first_name, last_name, email)
  VALUES ("Shawn", "Logan", "shawn.l@email.com");

#create a seperate beer table with fixed beers that that relates to user database
#import mysql.connector

#cnx = mysql.connector.connect(user='root', password='password',
#                              host='127.0.0.1',
#                              database='BeerMe')
#cnx.close()

import mysql.connector
from mysql.connector import MySQLConnection, Error
#from python_mysql_dbconfig import read_db_config

conn = mysql.connector.connect(
  host='127.0.0.1',
  database='BeerMe',
  user='root',
  password='password',
  auth_plugin='mysql_native_password'
)
print(conn)

if conn.is_connected():
  print('Connected to MySQL database')

sql_select_Query = "select * from Users"
cursor = conn.cursor()
cursor.execute(sql_select_Query)
records = cursor.fetchall()
print("Total number of rows in Users is: ", cursor.rowcount)
#row[0] is user id!
#Usually one adds a try catch block with error to account for exceptions
for row in records:
  print("First Name = ", row[1], )
  print("Last Name = ", row[2])
  print("Beers Tasted  = ", row[3])
  print("Email  = ", row[4], "\n")
# if(db_connection== null):
#   print("This is a null value!")
# else:
#   print("I have something")

#Insert Script for console is below:
first= input("What is your first name?")
last=input("What is your last name?")
beers=input("What beers have you tasted?")
email=input("What is your email address?")
values="VALUES('"+first+"','"+last+"','"+beers+"','"+email+"')"
print(values)
mySql_insert_query = "INSERT INTO Users (first_name, last_name, beers_tasted, email) "+values
print(mySql_insert_query)
cursor = conn.cursor()
cursor.execute(mySql_insert_query)
conn.commit()
print(cursor.rowcount, "Record inserted successfully into User table")
cursor.close()
#print(test)
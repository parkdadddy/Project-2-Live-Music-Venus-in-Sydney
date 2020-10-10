# Project-2-Live-Music-Venus-in-Sydney
Last year, I finished my honours thesis on Live Music Ecology in the context of urban planning and cultural production. So in this project, I would like to consider it as an extenstion to my thesis . In particular, I would like to see how the skills that have been developed since project 1 can improve my approach to my thesis.


## Project Aims:

- Retrive the geographical information of the venues and bottle shops, and store it in database for future reference.
- Visualise the retrived data in forms of tables and maps.

## Data Source

- Google Map API place search
- NSW Open data

## Technique Used

ETL
-  use python make google map place api calls to get the data by nearby search in 5000 radius
-  make connection to MongoDB and store the data in a list of dictionaries

## Web

Visualisation
- Flask app was established
- export venues data from mongodb to csv files
- use jquery to read the csv file, and use geoCsv to visualise data on a map
- use j3 to read the csv file and visualise it in form of table
  
![alt text](https://github.com/parkdadddy/Project-2-Live-Music-Venus-in-Sydney/blob/master/Images/Capture.PNG)
![alt text](https://github.com/parkdadddy/Project-2-Live-Music-Venus-in-Sydney/blob/master/Images/Capture2.PNG)



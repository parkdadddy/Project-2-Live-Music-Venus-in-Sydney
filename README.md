# Project-2-Live-Music-Venus-in-Sydney
Last year, I finished my honours thesis on Live Music Ecology in the context of urban planning and cultural production. So in this project, I would like to consider it as an extenstion to my thesis . In particular, I would like to see how the skills that have been developed since project 1 can improve my approach to my initial research.

## Mini Thesis Context:
The lockout laws which were introduced by the NSW Government have devastating effects on the live music ecology in Sydney, more than hundreds of the live performance venues have closed down. And besides the direct influences from policies and government commiments, live music ecology is also indirectly and directly affected by gentrification and the intensifying requirements on building upgrades.

The core argument to introduce the lockouts laws is to reduce alcohol related harm, assumingly, more alcohol consumption will lead to more alcohol relate harms, and so are the number of alcohol licensed venues and selling premises.

Therefore, in this project, I would like to find out:
  
  (1) Firstly, the number of live music venues before and after the introduction of the lockout laws, and to current (if possible).
    - the data will be presented on a map
  
  (2) Secondly, driven by the core argument of the lockout laws, the number of alcohol premises, live music venues and crime cases in serval 'night-out' preicnts around the world and compare them spatially and statistically. Namely, Melbourne CBD; Northbridge, Perth; Fortitude Valley, Brisbane;Kings Cross, Sydney; Berlin; Amsterdam ( reason being its one of the most successful night time economy cities);
    - scatter plots to see if crime cases are correlated to number of alcohol selling premises

## Methods:
1. Mapping : In order to map out the venues in Sydney, it would require the geographical information of each venue, coordinates for best convinience in this project.
            
            - I would like to use web scrapping to gather a list of live music venues in Sydney with venue name and address
              source: https://www.eventfinda.com.au/venues/sydney/live-music, Google API
        
            - After the names and address are retrived, I then will use GeoCoding to get the coordinates by using leaflet GeoCoding library
  
            - finally use leaflet to map out the venues on mapbox
            
            - it would be better if I can show veneues over a certain time period, I need to find an interactive element to scroll the years/data
  



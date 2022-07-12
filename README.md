# Flying-Pig-Fitness-Frontend

## Description
Link to App: https://flying-pig-fitness-frontend.herokuapp.com/
Creating the frontend of the fitness application, creating pages, components and incorporating the requests to API's.

## Technologies Used

1. React
2. React Router
3. React DOM
4. Axios
5. Material UI

## Approach Taken
Starting out my project, I wanted to create the wireframe and a base for the app before anything else. The login, sign up, and CRUD functionalities were developed last throught this project. The first thing I did was research API's and how to use them, luckily I stumbled across a great API in exerciseDB through Rapid API. This API had 1300+ exercises and the main issue throughout the entirety of the project was how to access them correctly, as it was a ton of data to go through. The exercise pages and sections were created first as this was the bulk of the project. Later I incorporated the logic with users and limited access to people who weren't signed up or logged in. The only way to access ANYTHING within the project is by signing in or logging in. Without signing in or login, the only parts of the site accessible are the landing page and the sign up/login pages. 


## Unsolved Problems
An unsolved problem is that when you click on an exercise at the bottom of the home screen and scroll down on the exercise page, the list of 'similar exercises' and 'exercises that use the same equipment' can go on forever to the right. I want to make that a little more smooth and limit the amount of exercises you can see at once by either incorporationg a button to scroll through the options or creating different pages like I have on the home page.
Another unsolved problem is that I wanted to combine the food diary with the food search API, so when you search for a food you can just click a button to add to your food diary.
Similar to the issue I just mentioned, I wanted to do the same with the exercises API and the workout log. It would be awesome if I could click into a workout and hit 'Add workout' then the user can log how many sets/reps/weight they did so they can see their progress; as in fitness the most discouraging thing is when you don't see progress.

## User Stories
The bulk of this project was spent trying to navigate through the API's and how to access the properties correctly. It took several days - a week to try and figure out the exerciseDB API. The food API was a lot easier to figure out, although this did take some time, it only took a few hours to implement it into my project. 

## Notes

- Want to be able to figure out the problems in the 'Unsolved Problems' section.
- Maybe switch up the API for the food search. myFitnessPal's API is extensive and has way more information. Looked a little too overwhelming with the time given for the project. If I were to keep continuing with this project, I would switch it up to the myFitnessPal API for sure. 
- Want to be able to add pictures, maybe add another section that is 'Progress Pictures' so users can see differences in their body composition throughout their journey. (I have a 'Progress' album in my phone that can remotivate me if I'm feeling discouraged myself.) 
- Recommended workout section would be awesome... if a user skips a leg day the app can tell them to go do leg day. 

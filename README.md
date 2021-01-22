# Star Wars API 

_Web Based Star Wars API Search Application Using React and Bootstrap4_

![StarWarsAPITable Screenshot](https://github.com/danielmurphy1/star-wars-api/blob/edit-and-refactor/src/images/star-wars-api-screen.JPG)

## Instructions

To Download and Run Locally

1. Clone Code Locally from GitHub
2. CD into application directory
3. Run "npm install" (or "npm i") in terminal to install packages and dependencies
4. Run "npm run start" in terminal to start application locally

To Use Locally or Accessing at Below Link

The table will auto-populate with the first 10 characters and their data from the API (Star Wars API was used for this app and is available [here](https://swapi.dev/)). The buttons at the bottom can be used to change pages for the populated data. Search full or partial character names using the search form at the top. Pagination buttons will dynamically populate based on the total number of characters returned. 


Access the app [here](https://pacific-harbor-78489.herokuapp.com/)

### Summary

This application is the fourth that I have created using React and the second consuming an API for data presentation. Creating this API app was more difficult than the previous one that I created, as I had to fetch not only initial endpoints to display the data that I wanted, but I also had to fetch additional endpoints that were part of the returned dataset from the root data - specifically the species and the homeworld of each character. This forced me to learn how to use and organize multiple promise calls in order to display the desired data. 

In creating this application, I learned that different APIs store and present data differently and that some are more difficult to navigate than others. After creating this application, I feel confident that I am able to use returned data as well as API documentation to navigate additional data that is nested in returned JSONs as additional endpoints to find the desired data for use/consumption. 

### Author

- Dan Murphy, Full-Stack Developer, https://www.linkedin.com/in/daniel-murphy-055/
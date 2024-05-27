# Data Analysis
## Live link :
- https://movie-app-lavanya.netlify.app/
## Overview

- A movie app that allows users to browse through a collection of movies, mark their favorites, and view them later.

## ScreenShot

![screenshot1]

![screenshot2]

## Components

- `MovieList` :  Loads movie data from Redux and displays all movies.Fetches movie data, displays movie cards using the `MovieCard`.

- `MovieCard` :Renders a card for each movie.Displays movie information such as movie name, rating. Provides functionality to mark movies as favorites.

- `FavoriteList` : Displays a list of favorite movies. Utilizes the `MovieCard` to display each favorite movie.
  
- `Header` : Provides navigation elements for the app. Offers consistent navigation throughout the app and enhances user experience.
  
- `ShimmerCard`:Visual loading indicator displayed when data is still loading.

## Installations

- Clone the repository by running the below command

```
git clone https://github.com/Lavanya-Sathya/movie-app.git
```

- Navigate to Project repository

```
cd movie-app
```

- install dependencies using yarn

```
npm install
```

## Running the Application

- Start the development server

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



## NY Times Most Popular Articles App - REACT
This project is a simple web application built with React that retrieves and displays a list of the most popular articles from the New York Times Most Popular Articles API. It allows users to view details of each article by clicking on the respective item in the list, following the typical master/detail pattern.

## How to Install
Open cmd and clone the project using this command:
```https://github.com/mufaddalali/NY-Times-App.git```

Then go to folder NY-Times-App, open terminal and write:

```
npm install
```
This command will install all the dependencies of the project

## Run the project
After succesfully installing dependencies. Run
```
npm run dev
```
This will open the project on [http://localhost:5173](http://localhost:5173)

## Change the API Key
- Go to [https://developers.nytimes.com/get-started/](https://developer.nytimes.com/get-started) and make your account. You will get an API key
- Then go to api.js file in the project and insert your API key in the variable provided below

```
const apiKey = 'YOUR_API_HERE';
```

Once you have inserted your API you will see the results.

#### Folder Structure
There are 2 sub folders in the project.

```1. Api```
```2. Components```


- The api folder contains api.js file which is responsible for interacting with external API and fetching data. It encapsulates logic related to data retrieval and provides a clean separation of concerns within the project.
  
- Components folder has 2 sepearte files. ```Article.jsx ``` and ```ArticleDetails.jsx```. These two components are made to display all articles and single articles seperately and to ensure uniformity and improved rendering efficiency.

 - The ArticleDetails page is a dynamic routing page that displays a single post when clicked on View Article button

## Features

- Fetches data from the NY Times Most Popular Articles API.
- Search article by title
- Displays a list of articles with titles and summaries.
- Allows users to view detailed information of each article.
- Mobile responsive

## Thank You
- Appreciate your feedbacks :)

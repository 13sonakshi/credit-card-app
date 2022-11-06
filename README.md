# Getting Started with Credit Card React App

## Available Scripts

In the project directory, you can run following components:

## Running FrontEnd
1) Navigate to project
2) npm i (Install Node dependencies)
3) Wait for installation to complete
4) npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Running Backend Service
1) Navigate to Backend Folder - cd backend
2) npm i (Install Node dependencies)
3) Wait for installation to complete
4) npm start

## Connecting to Mongo Db
1) Install the MongoDB compass
2) Connect to your deployment
3) Create a new database titled - creditcarddb
   This database name is also present in (\credit-card-app\backend\database\db.js) db.js file
   mongodb://localhost:27017/{dbName}
4) Connect to your database

## REST API's
1) add cards (POST)
http://localhost:4000/cards/add-card

Sample request Json

{
    "name": "Sherlock",
    "cardNumber": "378734493671000",
    "limit": "22"
}

2) get all cards (GET)
http://localhost:4000/cards/

## Running test cases using `npm test`
1) Navigate to Backend Folder - cd backend
2) npm test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Postman collection and mongo db collections are present inside Resources folder



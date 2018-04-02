## Knowledgizer

A project I am fiddling with for fun.

#### Full specification
A website which prints pulls random articles from wikipedia and prints them to the screen one by one. The articles will be printed in random locations and the user will be able to control how fast they appear.

#### Learning goals
* Havefun!
* Learn React and be able to implement react features in a test driven manner
* Improve my understanding of asynchronous code
* Improve my understanding of the links between back end and front end technologies
* Build a silly thing with some interesting ideas which will allow me to develop my knowledge further. I have described some of these issues below:
  * The wikipedia API only allows 20 articles to be requested at a time. This means that the app will have to track the number of articles it has stored ready to print and asynchronously make another request when necessary. Because of the CORS error this will have to run via the server but without reloading the front page. The request will need to complete before the app runs out of articles to print.
  * Testing: the app will be updating it's own state asynchronously, and the content on the screen will update too. This means that my tests will have to take into account that the state of the app changes over time with no user input.

#### Plan
* The eventual way I am hoping to build this is as follows:
* The app will store an array of article objects containing the article id, title and url from the Wiki API.
* The user will define the time unit in milliseconds via controls in a floating component on the page
* Each time unit, one article from the array will be removed and printed to the screen in a random location. The printed content will be a link to the article whose body is the title.
* When the articles array reaches 10 (or some appropriate number), the app will request another load of articles from the API via the express server.
* The response will be converted into a number article objects and each objecte pushed into the artices array used by the app.
* There will be a reset button on the screen which will remove all articles from the page.
* There will be a start button which will begin adding articles to the page again.

#### Technologies used
Production
* ReactJs
* Node.js
* Express
* Axios

Testing
* Jest
* Supertest

#### To use
```
$ npm start
```

#### To run tests
###### Back-end
```
$ npm run server-test
```
###### Front-end
```
$ npm run client-test
```


#### User stories

###### MVP
```
As a user
I want to see a random wikipedia article
So I can learn something new
```

###### v2
```
As a User
I want to see a list of random wikipedia articles
So I can choose what I want to learn about
```

###### v3
```
As a user
I want the articles to print to the screen one per second
So that I can decide which one I want to click on
```

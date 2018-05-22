401 JS --  Lab 26 Cowsay
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will be able to configure webpack to compile JS into a bundle
* Students will be able to configure webpack to compile sass into a bundle
* Students will be able to configure babel to transpile JSX and ES6 to ES5 javascript
* Students will be able to create and render react components to the DOM
* Students will be able to add event listeners to react components 
* Students will be able to update react component state

## Requirements  
#### Configuration  

Your lab directory must include:  
[ ] **README.md** -- with a documention about your lab
[x] **.gitignore** -- with a robust gitignore
[x] **.eslintrc.json** -- with the class .eslintrc.json file
[x] **.eslintignore** -- with the class .eslintignore
[x] **.babelrc** -- with all dependencies and dev-dependencies 
[ ] **package.json** -- with all dependencies and dev-dependencies 
* **package-lock.json** -- with the package.json lockfile
[ ] **webpack.common.js** -- per lecture code
[ ] **webpack.dev.js** -- per lecture code
[x] **src/** -- conating the frontend code
[ ] **src/main.js** -- containing the entire app
[x] **src/style** -- containing your sass
[x] **src/style/main.scss** -- containing the frontend code
* **Remember to follow [today's guide](https://github.com/codefellows/seattle-javascript-401d23/blob/master/front-end/26-frontend-tooling-and-react/frontend-tools/steps.md) on the new additions you need for files such as *eslintrc.json* and *package.json***. 


 
#### Feature Tasks  
Create the following component
###### App
[x] Should contain the entire application's view and state
[x] Should have a property on the state called content 
[x] Should create a view with the following display
  [x] A heading with the title "Generate Cowsay Lorem"
  [x] A Button that says "click me"
    [x] `onClick` the button should generate new content on the app state using cowsay and faker
  [x] A pre tag that displays the App's state content 

####  Documentation  
[ ] Write a description of the project in your README.md

#### Stretch Goal
* add a select menu that enables you to change the type of cowfile currently being used

##CodeFellows 401 Javascript - lab 26

## Overview
- This lab assignment is an introduction to React.  We need to be able to configure webpack  to compile JS into a bundle, configure webpack to compile sass into a bundle, configure babel to transpile JSX and ES6 to ES5 javascript
- Then we are required to create and render a basic React component to the DOM.  In this case, we are using the Cowsay-Browser and Faker dependencies to render a cow in the DOM that "speaks" lorem ipsum by responding to an event listener button inside the component.  This lab requires understanding of state and how binding contextual this of the constructor to the event handler is critical for React components to function properly.

##Getting Started
- In order to try a working version of this project, fork and clone the github repo and open in a code editor of your choice.  
- You will need to ensure that your package.json contains all of the dependencies and that your webpack configuration is setup in order to working with Babel transpilation.  
- The project is using ES6 style javascript so Babel is essential in order to the the code to work in all browsers.  Additionally, the projects front-end dependencies are being managed in webpack and the webpack.common.js and webpack.dev.js files in this repo are critical in order to this code to function properly.  
- Finally, the package.json contains a script that will run webpack-dev-server that loads a live-server for use in a development environment.

##Change Log
- 05-21-2018 2:15pm - Began work on project
- 05-21-2018 3:30pm - webpack configuration functional
- 05-21-2018 4:30pm - React component rendering to the DOM
- 05-21-2018 5:33pm - React component fully functional including event handler
- 05-21-2018 6:20pm - Documentation
 

Lab 26: Cowsay With React
===

**Author:** Jennifer Piper

This is a very simple web app to demonstrate setup of a React project. It displays a cartoon cow saying random words that change to different random words when a button is clicked.


## Getting Started
In a node.js environment, from the root of this repo, install dependencies:
* `npm i`

For this project to work a **bug must be corrected** in the `cowsay-browser` package:

in 
```node_modules/cowsay-browser/lib/balloon.js```
change line 4 from 
```
delimiters = {
```
to
```
var delimiters = {
```

To start the app at http://localhost:8080/:
* ` npm run watch`
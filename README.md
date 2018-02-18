# Default Project
-


Created for interview coding tests. Used to quickly generate a project with environments for general dev, plain HTML, React, and Express API. All environments can watch for changes and live update. Uses ESLint for styling warning.

## Dev
Provides a test framework to quickly add test cases and begin development.

### Commands
- `npm run test` - runs tests once
- `npm run test:watch` - runs tests and watches for changes
- `npm run dev` - runs dev.js with watcher to restart

### Libraries
Jest - setup test cases to run and watch  
Nodemon - test changes outside of test runner

## Plain HTML
Allows for rapid development of HTML, CSS, and JS using browser environment. Bundles JS and CSS while serving with live updates and tunneling. Uses **http://localhost:3000**.

### Commands
- `npm run plain` - bundles JS and CSS with autoprefixes and copies HTML into _/dist_ then opens browser and serves with hot reloading
- `npm run plain:build` - builds plain HTML environment

### Libraries
Browserify/Watchifiy - bundle JS  
PostCSS/Autoprefixer - bundle CSS  
Browser-Sync - serves site with live updates

## React
Allows for rapid development of React using components. Bundles JS and CSS while serving with live updates. Uses **http://localhost:3003**.

### Commands
- `npm run react` - bundles JS and CSS, generates HTML, and serves with hot reloading  
- `npm run react:build` - builds react environment

### Libraries
Poi - handles Webpack config and serves
Babel - needed for building for ES5 by Poi

## API
Starts server to provide API or HTML pages. Serves _/dist_ folder along with api served via **/api**. Uses **http://localhost:3042**.

### Commands
- `npm run api` - bundles JS and CSS, generates HTML, and serves with hot reloading  

### Libraries
Express - create server and handle routing
Nodemon - watch for changes and restart server
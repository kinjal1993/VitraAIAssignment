# VitraAIAssignment

Fetches data from a json file, displays on a webpage.

> Front end is built upon ReactJS and Back end is developed using express.js

# Directory Structure

```bash
├── client (Front end - React)
|   ├── public
|   ├── src
|   |   ├── components
|   |   ├── App.js (Entry point)
|   |   ├── urls.js (Api urls constants)
|   |   ├── index.js
|   |   ├── index.css
│   ├── package.json
├── api (Back end - Express.js)
│   ├── data
|   │   ├── people.json
|   ├── routes (app routes)
|   │   ├── *.js
|   ├── controllers (business logic)
|   │   ├── *.js
│   ├── app.js (Entry point)
|   ├── package.json
├── README.md
├── package.json
```

# Quick Start

## 1. Clone the git project
``` bash
git clone https://github.com/kinjal1993/VitraAIAssignment.git
``` 
## 2. Navigate to the folder
``` bash
cd <folder-name>
``` 
## 3. Install client side dependencies
``` bash
cd client
npm install
```
## 4. Install server side dependencies
``` bash
cd api
npm install
```
## 5. To run both the servers simultaneously

First navigate to the root folder and install dependencies
``` bash
npm install
```
## 6. Run the project

Navigate to the root folder and install dependencies
``` bash
npm run dev
```
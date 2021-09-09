# Challenge Sensor - Event

## Project objetives

- Develop a Web application in React and a Rest API in NodeJS connected to MongoDB
- Upload the source code to a public repository (GitLab,GitHub,BitBucket...)
- Create a README file containing instructions for preparing the environment and executing the application
- Use of good practices, design patterns and UI/UX
- Repository versioning flow

## Starting

 1. Fork and clone the repository 
 2. Create a file on `api` called: `.env` with the following structure (don't replace any value, I created a user tester on mongoDB Atlas so you can test the web without creating a local DB):

```
PORT=3001
USER_MONGODB=usertester
PASS_MONGODB=tester123
NAME_MONGODB=Sensor
```

3. Go to https://console.cloud.google.com, log in with your Gmail account, click on the left corner on `new project` and create one with any name.
4. Once the project is created and you are on it click on `+ ENABLE APIS AND SERVICES`.
5. Look for `Maps JavaScript API` and click on it, then click on `ENABLE`.
6. Click on `credentials` on the left panel.
7. Click on `Create credentials` and then on `API key`.
8. Copy yout API KEY and click on `save`.
9. Create a file on `client` called: `.env` with the following structure and replace the APIKEY value:

```
REACT_APP_MAPS_APIKEY='AIzaSyDmdQvWfvchoEkxaOdCZSFUavKR7Q-bBuY'
```
Can use this APIKEY if you couldn´t do the google steps.

- Run `npm install` on client and api to install the dependencies and then `npm start` on both sides

## Exclusionary requirements

### REST API requirements
- Expose a "Sensor" resource with their respective
endpoints
- Endpoint to add, remove, modify and list the
sensors
- Expose a "SensorEvent" resource with their respective
endpoints
- Endpoint to add events associated with a sensor
- Endpoint to list all events associated with a
sensor
- Persist in the MongoDB

### WebApp requirements
Sensors component
- List + CRUD
- Link to sensor events
Sensors events component
- Section 1: Sensor Name
- Section 2: Form for creating sensor events
- Section 3: Sensor events list (auto refresh)
Models properties
- Sensor: id, name, location(lat/long), active,
minval,maxval
- Sensor Event: id, sensorid, createat, value

### Desirable requirements
- Implements of good practices, design patterns and UX
- Implements ExpressJS
- Implements socket.io to show changes in real time
- Implements API middleware to authorize requests using JWT
- Implements Unit Test
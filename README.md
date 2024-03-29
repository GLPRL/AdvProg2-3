# ChatApp Pt.II
## Server & Client


**Credits:**

- Dekel Schreiber

- Naor Gavrielov

- Gal Pearl

Requirements:
- NPM
- Express
- Socket.IO
- Socket.IO-Client
- React + React Router
- Cors
- MongoDB + Mongoose

### ** Important: The dafault packet size sent in registration is small. Please upload only small sized images as profile picture, otherwise the user will NOT be registered. **
Example images you can use :

![Untitled](https://github.com/GLPRL/AdvProg2-3/assets/116657293/3f23f252-9db9-43e4-8fac-cb8cd7d76bef)

![profilePic3 (1)](https://github.com/GLPRL/AdvProg2-3/assets/116657293/686fcd91-60b4-4ab9-bb1d-25ed882917c4)



We used Bootstrap 5 as our technology to design the pages, content and visual effects;
React was used for routing between pages, loading and using components;
The server runs on Express, and communications between the client and server are done with Socket.IO + Socket.IO-Client.

Tokens were implemented as a method to save our users' data and manage it's requrests from the server.
Everything is stored in a DB - Chats, users, and everything in between.
The server is working with GET & POST requests designed by the lecturer, using SWAGGER: https://swagger.io/

### Run Instructions: ###


Download all of the files, extract them to a location of your choosing.
**Everything must be in the same directory**

``` cd ``` into the location of the files, 
and then
```node app.js```
.Access the application on http://localhost:5000
(Make sure you have installed all the dependencies before running the system)

Please only upload small sized pictures otherwise mongoDB wont be able to handle them. Hemi stated that only small sized pictures will be tested.

For running only the front end, run ```npm start```. That will open the application without running the backend/server. WARNING: USE THIS ONLY IF YOU WANT TO CHECK INFRONT OF HEMI'S SERVER OTHERWISE DONT USE

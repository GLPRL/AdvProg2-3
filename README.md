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
- React
- Cors
- MongoDB + Mongoose

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
```npm run build```
and then

```cd server```
and then
```node app.js```

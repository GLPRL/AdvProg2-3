# ChatApp Pt.Ib

Graphical interface for our web application.


**Credits:**

- Dekel Schreiber

- Naor Gavrielov

- Gal Pearl

In this part, we developed 3 web pages, that will be used as the interface of a client, using the site with a browser.
We developed 3 pages: Login page, Registration page and web-app page.
For this project, these are only a mock of the site and it's requirements presented to us.

Login page and Registration pages allow to move between them, if a user already exists, or would like to register a new account.

We used Bootstrap 5 as our technology to design the pages, content and visual effects;
React was used for routing between pages, loading and using components,
and running the server currently with npm.

In order to prevent navigating into the chat, without authentication, we used a parameter indicating if a user is logged in (changed at log in page),
and when a user is navigating, manually, using the URL bar, then the parameter will be set to false.
Many renders and on-the-go updates on the screen were done by useState and JS, to update many fields and arrays we used in order
to save the data the user chose to update / add.

How to use:


Download all of the files, extract them to a location of your choosing.
**Everything must be in the same directory**

``` cd ``` into the location of the files, 

```cd server

npm run build

node app.js

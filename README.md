# Chattr

A simple Chat App written in Javascript for NodeJS.

This app makes use of sockets to keep any messages in real time.

![Chat Page](./main_page.png)

## Getting Started

To get run this app locally, you'll need a working NodeJS development environment. You'll also need npm for easy JS dependency management.

First, run "npm install" within both the client and API directories.

Next, run "npm run db:migrate" in the API directory to set up the database. If you would like to use junk data, you could then run "npm run db:seed" within the same directory.

This app is set to run on port 3000 by default.

You can find an official version of the app [here](https://quora-clone-jg.herokuapp.com/)

## Technologies Used

### Frontend SPA

- socket.io
- redux (with thunk)
- React
- Javascript
- CSS (SCSS)

### Backend REST API

- socket.io
- sequelize
- postgresql
- express
- node
- redis
- Javascript

## Features

### Login Page

- Sign in/up normally

### Messages

- send and receive messages with other users
- messages can be sent in a general room for everyone or a direct private room with a single other user
- receive notification when you receive a message from another room
- display alerts for connecting/disconnecting for each user

### Logout

- clicking on user icon displays the logout button

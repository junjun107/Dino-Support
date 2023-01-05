# Dino Suport
This is a Full stack App where users can create, update, delete a ticket. 

**Link to project:** https://drab-pear-moth-wrap.cyclic.app/

![alt tag](https://res.cloudinary.com/dhhiphscp/image/upload/v1670283022/portfolio/dino_support_tggjir.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, MongoDB, Node, Express, React

Backend
user login authentication is done with 
    - bcrypt password compared with user entered password
    - JWT is used to protect routes


Frontend is created with Redux-tool-kit
 - At the home page, users can register or login
 - Once logged in, users will be redirected to dashboard page
 - from there, users can view tickets or create a new ticket.
 - If user clicks on new ticket, page will redirect to /new-ticket route with a form, with prefilled user info from login form
 - If user clicks on view tickets, page will redirect to /tickets route will all user associated tickets showing
 

## Optimizations
- Spinner for loading 
- Better styling 

## Lessons Learned:
By default express handles errors for you passing them to your error handling middleware, but it doesn't catch Promise rejections and process those for you. That is made possible with express-async-handler.

However in the upcoming express version 5 (still in Beta), this is will be built in and we don't need third party express error handlers like express-async-handler anymore. I'm very excited!


# How to run this code

## Set Environment Variables
Rename the .envexample to .env and add your own MongoDB database URI and JWT secret

## Install backend dependencies at root
```npm install```

## Install frontend dependencies
```cd frontend
npm install
```
## Run app in development (frontend & backend at the same time)
```npm run dev```

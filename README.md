# Reflection Project

This application will let users post reflectionary tidbits about a topic of their choice. This app has been deployed to: 
<!-- insert heroku website here -->

## Built With

axios, material-ui, pg, react, redux

### Database Setup

Steps to get the development environment running.

```sql
-- Database should be reflection_board
CREATE DATABASE "reflection_board";

-- Switch to "reflection_board" before running the following
-- Table to store the reflections
CREATE TABLE "reflection" (
  "id" serial primary key,
  "topic" varchar(120),
  "description" varchar(480),
  "bookmarked" boolean default false,
  "date" date not null default CURRENT_DATE
);
```

## Getting Started

Create your database and tables using the Installing section of this README above. Start the server:

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```
### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [postgresql](https://www.postgresql.org/download/)



<!-- ## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused. -->

## Documentation

- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [postgresql](https://www.postgresql.org/docs/)
- [material-ui-next](https://material-ui-next.com/)

### Completed Features

High level list of items completed.

- [x] Display past reflections onto DOM 
- [x] Implement bookmark feature 
- [x] Create Delete Button for each reflection
- [ ] Better style header and card with material-ui
- [ ] Fix Time format on card using moment.js
- [ ] Add form to Add New Reflection on add new reflection page

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Add a multiple users feature

## Authors

* Teagan Nouska


## Acknowledgments

* Thank you to PrimeAcadamy Staff for the base initialization of this project.
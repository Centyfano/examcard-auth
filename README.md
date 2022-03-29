# examcard-auth

This is a web application for authenticating examination cards using QR codes  
The backend is made with node.js, and the front-end with angular  
The application receives ann API from the school having three databases:

- Students Database
- Elibible Students Database
- Examinations Database
  The database models are in `backend/models`

## Installation

### Prerequisites

- PostgreSQL. Create a database, and user; Grant permissions to the database on the the created user. The database name and the user will be used as environment variables in the [environment variables](#Environment-Variables)
- `npm ^7.16`
- `angular ^12.1`

### Instal

- Clone the `https://github.com/Centyfano/examcard-auth.git` project, then navigate to the `examcard-auth` folder
- On the terminal, run `npm i`

Environment Variables  
Navigate to `backend/config`, and rename the `config.env.env` file to `config.env`. Fill the fields in the file with your values

## Usage

This application uses the JSON API to insert data into the database. To use the given data, navigate to the `backend` folder, and open the folder in terminal.

### Backend Server

> Postman API documentation for methods and routes can be found [here](https://documenter.getpostman.com/view/11992312/UVeDsn8X)

- From the project root directory, navigate to the `backend` and open it in termial.
- Run `node seeder.js -i` to import the data into the database
- Run `node index.js`

### Angular (front-end) server

- Open the root folder in termial, run `ng serve` or `ionic serve`
#### Demo
Live project demo can be found [here](https://examauth.centyfano.dev)

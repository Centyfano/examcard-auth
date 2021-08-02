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

- Clone the `https://github.com/Centyfano/examcard-auth.git` project into your computer, then navigate to the `examcard-auth` folder
- On the terminal, run `npm i`

Environment Variables  
Navigate to `backend/config`, and create a file called `config.env`. In the file, initialize and assign the following variables, according to their respective descriptions:  
  * PORT = web_server_port  
  * DB = database_name  
  * DB_USER = database_user  
  * DB_PWD = database_password  
  * QR_SECRET = secret_encryption_key_for_qr_code

## Usage

This application uses the JSON API to insert data into the database. To use the given data, navigate to the `backend` folder, and open the folder in terminal.

### Backend Server

- From the project root directory, navigate to the `backend` and open it in termial.
- Run `node index.js`

### Angular server

- Open the root folder in termial, run `ng serve` or `ionic serve`
- Run `node seeder.js -i` to import the data into the database

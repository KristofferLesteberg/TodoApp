# Todo API with ASP.NET and Postgres

This is a REST Web API created with c# and the .NET framework that uses PostgresSQL as the database and swaggerUI for testing the API.
The Todo App is deployed via Docker containers.

## Features
 - GET: get all the todos
 - POST: Add todo by adding Name and Id
 - PUT: To update a todo
 - DELETE: To delete a todo

## Tech stack
  - .NET
  - PostgresSql
  - Docker
  - SwaggerUI

# How to test the API

### Prerequisites
- Docker and Docker Desktop installed [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)
- .NET SDK 8+  [.NET SDK](https://dotnet.microsoft.com/en-us/download)
- An IDE (for example vsCode)
- PostgresSQL installed [PostgresSQL](https://www.postgresql.org/download/)
- Optional pgadmin to get a visual Database 

Clone the reposetory
```
git clone <Repo URL>
```
Create a .env file in the root directory with
```
POSTGRES_PASSWORD = YOUR_POSTGRES_PASSWORD
```
Build the project using the docker compose file
```
docker compose up --build -d
```
After building the project test it by going to 
```
http://localhost:8080/swagger
```
Alternativ if you want to change the port go to the docker-compose.yml file and change the port number 
  
If you have done everthing correctly you should see this page
  
<img width="1869" height="720" alt="image" src="https://github.com/user-attachments/assets/ec3736c9-785a-40a6-869e-daafa2267955" />
  
Here you can test the API with GET, POST, PUT and DELETE


# Test with pgadmin
*Note: this requires that pgadmin is installed*

Create a new server in pgadmin and use these settings:
 - Name: AppDb
 - host/adress: localhost
 - Port: 5433
 - Username: postgres
 - Password: same password as in you .env file
  
This should connect to the database.  

To see the tables go to Databases -> AppDb -> Schemas -> tables - right click on Todos and click view data 

Then you should see something like this:  

<img width="824" height="775" alt="image" src="https://github.com/user-attachments/assets/5f0f8c96-6c20-4a48-a671-e4cde0052825" />







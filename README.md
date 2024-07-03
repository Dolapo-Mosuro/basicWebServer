A basic web server that exposes an API endpoint and conforms to the criteria below:
Endpoint: [GET] <example.com>/api/hello?visitor_name="Mark" (where <example.com> is your server origin)

# API Deployment Guide
This project demonstrates setting up a basic web server with Node.js and Express, deploying it to a free hosting platform, and exposing an API endpoint.

## API Overview
Endpoint
[GET] /api/hello?visitor_name="Mark"

Example Request
HTTP:
GET https://your-deployed-url.com/api/hello?visitor_name="Mark"
Response
json
{
  "client_ip": "127.0.0.1",
  "location": "New York",
  "greeting": "Hello, Mark!, the temperature is 11 degrees Celsius in New York"
}
client_ip: The IP address of the requester.
location: The city of the requester, hardcoded to "New York".
greeting: A greeting message including the visitor's name and the temperature in New York.
Setting Up the Project Locally
To run this project locally, follow these steps:

## Prerequisites
Node.js and npm are installed on your machine.
### Installation
Clone the repository:

```
git clone https://github.com/your-username/your-repo-name.git
```

Navigate to the project directory:

```
cd your-repo-name
```

Install the dependencies:

```
npm install

```


## Running the Server
Start the server:
```
npm start
```
The server will be running on http://localhost:3000. You can access the API endpoint by navigating to http://localhost:3000/api/hello?visitor_name=Mark.

Environment Variables
This project can use environment variables to manage sensitive information. Set up your environment variables in a .env file in the project root:

```
PORT=3000
API_KEY=your-api-key
DB_URL=your-database-url

```
Accessing Environment Variables
In your Node.js code, you can access these variables using process.env.VARIABLE_NAME.

## Deployment
The project can be deployed to various free hosting platforms like Heroku, Vercel, Glitch, or Fly.io. 

## Testing the API
After deployment, test the API endpoint using a web browser, Postman, or cURL.
```

curl "https://your-deployed-url.com/api/hello?visitor_name=Mark"
```

## Contributing
To contribute to this project, please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.

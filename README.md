## Timestamp Microservice
This is a small project I built as part of FreeCodeCamp’s Back End Development and APIs certification. It’s a simple API that returns a timestamp (in Unix and UTC format) when you give it a date.

## How It Works
If you go to /api, it shows the current date and time.

If you add a date (like /api/2015-12-25), it shows the Unix and UTC formats.

If you add a Unix timestamp (like /api/1451001600000), it still works.

If you type something that’s not a real date (like /api/banana), it gives you an error.

## How to Run the Project
Make sure Node.js is installed.

Open the project folder in VS Code or a terminal.

Run this to install the needed packages:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
Open your browser and try these:

http://localhost:3000/api

http://localhost:3000/api/2015-12-25

http://localhost:3000/api/1451001600000

Example Output
json
Copy code
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
Tools Used
Node.js

Express.js

## Why I Made This
This is one of the required projects in the FreeCodeCamp curriculum. It helped me learn how to:

Work with Express

Handle routes and parameters

Format dates in JavaScript

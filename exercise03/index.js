var http = require("http");
var employeeModule = require('./Employee'); // Ensure this module is correctly importing

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8090;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    const url = req.url.toLowerCase(); // Normalize the URL to lowercase

    if (req.method !== 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    } else {
        if (url === '/') {
            // Display welcome message and navigation buttons
            res.setHeader('Content-Type', 'text/html');
            res.end(`
                <h1>Welcome to Lab Exercise 03</h1>
                <p>My name: <b>Mehmet Ali KABA</b></p>
                <p>My student number: <b>101453763</b></p>
                <button style="padding: 10px 15px; font-size: 16px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;"
                        onclick="window.location.href='/employee'">See Employees</button>
                <button style="padding: 10px 15px; font-size: 16px; background-color: #28A745; color: white; border: none; border-radius: 5px; cursor: pointer;"
                        onclick="window.location.href='/employee/names'">See Employee Names</button>
                <button style="padding: 10px 15px; font-size: 16px; background-color: #DC3545; color: white; border: none; border-radius: 5px; cursor: pointer;"
                        onclick="window.location.href='/employee/totalsalary'">See Total Salary</button>
            `);
        } else if (url === '/employee') {
            // Display all employee details in an HTML table
            res.setHeader('Content-Type', 'text/html');
            const employees = employeeModule.getAllEmployees();

            let html = `
                <html>
                <head>
                    <title>Employee List</title>
                    <style>
                        table { border-collapse: collapse; width: 100%; }
                        th, td { border: 1px solid black; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body>
                    <h1>Employee List</h1>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                        </tr>
            `;

            employees.forEach(employee => {
                html += `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.firstName}</td>
                        <td>${employee.lastName}</td>
                        <td><a href="mailto:${employee.email}">${employee.email}</a></td>
                        <td>${employee.Salary}</td>
                    </tr>
                `;
            });

            html += `
                    </table>
                    <br>
                    <a href="/" style="padding: 10px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px;">Go Back to Home</a>
                </body>
                </html>
            `;

            res.end(html);
        } else if (url === '/employee/names') {
            // Display sorted employee names in a table similar to employee section
            res.setHeader('Content-Type', 'text/html');
            const employeeNames = employeeModule.getEmployeeNames();
            const sortedNames = employeeNames.sort();

            let html = `
                <html>
                <head>
                    <title>Employee Names</title>
                    <style>
                        table { border-collapse: collapse; width: 100%; }
                        th, td { border: 1px solid black; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body>
                    <h1>Employee Names</h1>
                    <table>
                        <tr>
                            <th>Full Name</th>
                        </tr>
            `;

            sortedNames.forEach(name => {
                html += `<tr><td>${name}</td></tr>`;
            });

            html += `
                    </table>
                    <br>
                    <a href="/" style="padding: 10px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px;">Go Back to Home</a>
                </body>
                </html>
            `;
            res.end(html);
        } else if (url === '/employee/totalsalary') {
            // Display total salary of all employees with names and salaries in a table
            res.setHeader('Content-Type', 'text/html');
            const employees = employeeModule.getAllEmployees();
            let html = `
                <html>
                <head>
                    <title>Total Salary</title>
                    <style>
                        table { border-collapse: collapse; width: 100%; }
                        th, td { border: 1px solid black; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body>
                    <h1>Total Salary of Employees</h1>
                    <table>
                        <tr><th>Full Name</th><th>Salary</th></tr>
            `;

            employees.forEach(employee => {
                html += `<tr><td>${employee.firstName} ${employee.lastName}</td><td>${employee.Salary}</td></tr>`;
            });

            html += `
                    </table>
                    <br>
                    <a href="/" style="padding: 10px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px;">Go Back to Home</a>
                </body>
                </html>
            `;
            res.end(html);
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
        }
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

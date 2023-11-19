# Log Viewer Application

## Overview

The Log Viewer application is a tool designed to view and filter logs stored in a MongoDB database. It provides an intuitive interface for querying logs based on various parameters such as log level, message, resource ID, and timestamp.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [System Design](#system-design)
- [Features](#features)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the application, ensure that you have the following software installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or accessible via connection string)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/log-viewer.git

2. Change into the project directory:

```bash
cd log-viewer
```

3.Install dependencies:

```bash
npm install
```

3.Start the application:

```bash
npm start
```
System Design
The Log Viewer application follows a client-server architecture:

Frontend: Built with React for a responsive and interactive user interface.
Backend: Powered by Node.js and Express to handle API requests and interact with the MongoDB database.
Database: MongoDB is used to store log data, providing flexibility in handling unstructured data.
Features
Filtering: Query logs based on log level, message, resource ID, and timestamp.
Responsive UI: Ensures a seamless experience across various devices.
Pagination: Navigate logs conveniently with paginated results.
DEMO:
![Demo Image](logs.jpeg)
Known Issues
CORS: The application may face CORS issues when accessing the backend from a different origin. Ensure proper CORS configuration on the server.
Contributing
We welcome contributions! Follow these steps to contribute:

Fork the repository.
Create a new branch: git checkout -b feature-name.
Make changes and commit: git commit -m 'Add new feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.
License
This project is licensed under the MIT License.

© 2023 Your ShivaShankar Reddy

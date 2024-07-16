# CS6440-Health-Dashboard

## Description

Briefly describe your project here. Explain what the application does and its purpose.

## Getting Started

### Prerequisites

- Node.js installed
- NPM

### Installation and Setup

Follow these steps to get your application up and running:

#### Health Dashboard Frontend

1. Navigate to the health-dashboard directory:
   ```bash
   cd health-dashboard
   ```

#### Install Packages

2. Install the necessary packages:
   ```
   npm install
   ```

#### Start Application

2. Start Application:
   ```
   npm start
   ```

#### Health Dashboard Backend

1. Navigate to the server directory in a separate terminal (within health-dashboard):
   ```bash
   cd health-dashboard/server
   ```

#### Install Packages

2. Install the necessary packages:
   ```
   npm install
   ```

#### Start Application

2. Start Application:
   ```
   npm start
   ```

Both the Health Dashboard and the Server need to be running simultaneously for the application to function properly.

## Deployment Information

- I created a Dockerfile for the frontend and backend (Dockerfile.frontend & Dockerfile.backend).
- I created a docker-compose.yml file to run both the frontend and backend in a single command, which builds the images and initializes the containers.
- I created an ec2 instance in aws using the free tier and installed git, docker and docker-compose on the instance.
- I cloned the repository on the ec2 instance and ran the docker-compose up command to start the application.
- I used api gateway to create a proxy for the ec2 instance as I needed https for the application to work properly. Aman helped me with this part.
- I have attached copies of the Dockerfiles and the docker-compose.yml in this documentation directory for reference.

You can access the deployed application here: https://gobbrgdg0k.execute-api.us-east-2.amazonaws.com/.
You can use the smart app launcher https://launch.smarthealthit.org/ to launch the application with any patient id. Simply, paste the deployed application url in the App's launch url box and click launch after selecting the patients you want to view.

## Usage

- **Navigate to the Dashboard**: Open your web browser and go to `http://localhost:3000` to view the health dashboard
- Once you login, simply go through each tab that is offered to a user and visualize the information that is given.

## Login
- Simply create your own by navigating to the webpage and click the register hyperlink
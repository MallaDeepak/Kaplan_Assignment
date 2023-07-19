# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the Angular project
RUN npm run build

# Expose the port on which the Angular app will run
EXPOSE 80

# Start the Angular app when the container starts
CMD [ "npm", "run", "start" ]

# FROM node:18-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY .. .

# EXPOSE 3001
# CMD ["npm", "start"]


# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies, including serve
RUN npm install && npm install -g serve

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3001

# Command to run serve
CMD ["serve", "-s", "build", "-l", "3001"]


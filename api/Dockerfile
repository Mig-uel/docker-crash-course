# First layer: Node.js base image
# This Dockerfile uses the official Node.js image as a base
FROM node:23-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy application code to the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Build the application (if necessary)
# RUN npm run build

# If using TypeScript, compile it
# RUN npm run compile

# If using a specific build command, uncomment the line below
# RUN npm run build

# If using a specific start command, uncomment the line below
# RUN npm run start

# If using a specific test command, uncomment the line below
# RUN npm run test

# If using a specific lint command, uncomment the line below
# RUN npm run lint

# Start the application
# This command will run the application when the container starts

# Commands to run the application
CMD [ "node", "app.js" ]


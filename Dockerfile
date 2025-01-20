# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend and backend code
COPY frontend/ ./frontend/
COPY backend/ ./backend/

# Build the frontend
RUN cd frontend && npm run build

# Expose the port the app runs on
EXPOSE 5000

# Start the backend server
CMD ["node", "backend/server.js"]

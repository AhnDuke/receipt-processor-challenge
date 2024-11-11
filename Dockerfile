# Use an official Node.js image as the base
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Compile TypeScript code
RUN npm run build

# Set the PORT environment variable (default to 3000)
ENV PORT=3000

# Expose the port to Docker
EXPOSE 3000

# Set the default command to run the compiled app
CMD ["node", "dist/server/server.js"]

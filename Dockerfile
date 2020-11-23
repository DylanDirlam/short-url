# Use the official image as a parent image.
FROM node:current-slim

# Set environment to production
ENV NODE_ENV=production

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Run the command inside your image filesystem.
RUN yarn install

# Build vue project
RUN ./node_modules/.bin/vue-cli-service build --dest ./api/dist

# Change to express directory
WORKDIR /usr/src/app/api

# Install api node modules
RUN npm install --production

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080

# Run the specified command within the container.
CMD [ "npm", "start" ]

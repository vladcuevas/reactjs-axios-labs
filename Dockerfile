# We have to specify the image that we are going to use
FROM node:16.15.1-alpine
# Create the node user
# Create a group and user
# We will add a user to avoid security issues with the root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# We must define the working directory that will be used inside the container
WORKDIR /app
# Then copy the package.json and yarn.lock that will be used to install the dependencies
COPY package.json ./
COPY yarn.lock ./
# Install dependencies - Once the files are inside the container we'll install the dependencies
RUN yarn install --frozen-lockfile
# Copy app files - Then copy our files from the current directory to the container
COPY . .

# Then we'll have to expose the port on which the app will be running, 3000 is the default that the react server uses
EXPOSE 3000
# Start the app - Finally we will start our application
CMD [ "npm", "start" ]
# use the appuser
# And then set the already created user for the container
USER appuser
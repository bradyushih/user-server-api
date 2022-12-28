FROM node:latest
WORKDIR /app  // if exist, use it otherwise, create one
COPY . .
RUN npm install
CMD node index.js

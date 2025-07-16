FROM node:14 AS server
WORKDIR /app
EXPOSE 3001
COPY ./app/package*.json .
RUN npm install
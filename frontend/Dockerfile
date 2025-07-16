FROM node:18-bullseye
WORKDIR /app
EXPOSE 3000
RUN apt-get update && apt-get install -y tzdata
COPY ./app/wallet_app/package*.json .
RUN npm install

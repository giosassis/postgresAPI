FROM node:latest
MAINTAINER Giovana Assis
COPY . /var/www/
WORKDIR /var/www/
RUN npm install  
ENTRYPOINT npm start
EXPOSE 3000
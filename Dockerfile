FROM node:8

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install -g @angular/cli

COPY . .


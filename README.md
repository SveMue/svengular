# Svengular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

Modifed with Docker from github.com/SveMue .

## Execute with docker

Install Docker Desktop: https://www.docker.com/products/docker-desktop 

Once installed, open the docker settings, browse to "shared devices" and active it. 

Run 'docker-composer up' to start the server.

This will create and start the project inside a runing docker container.
You can reach the startpage on 'http://localhost:4200'.

The app inside of the container will automatically reload if you change any of the source files.

This is possible due to docker volumes https://docs.docker.com/storage/volumes/


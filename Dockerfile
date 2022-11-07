FROM node:latest

WORKDIR /rahnema-fantasy-web

COPY . .

RUN npm i

RUN npm i -g serve

EXPOSE 3000

# build image with "docker build --network=host -t rahnema-fantasy-web-image ." command

# container should run with "docker run -dit --name rahnema-fantasy-web-container -p 3000:3000 rahnema-fantasy-web-image"

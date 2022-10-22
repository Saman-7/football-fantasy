FROM node:latest

WORKDIR /rahnema-fantasy-web

COPY . .

RUN npm i

RUN npm i -g serve

EXPOSE 3000

CMD [ "npm", "start" ]

# build image with "docker build --network=host -t rahnema-fantasy-web-image ." command

# container should run with the name rahnema-fantasy-web-container
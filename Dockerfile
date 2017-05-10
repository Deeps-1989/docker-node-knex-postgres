FROM node:6.10

WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install


CMD ["node", "app.js"]

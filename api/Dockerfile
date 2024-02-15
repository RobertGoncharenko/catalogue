FROM node:18-slim

ARG APP_PORT=3000

ENV APP_PORT=$APP_PORT

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

EXPOSE $APP_PORT

CMD [ "yarn", "install" ]
CMD [ "yarn", "start:dev" ]
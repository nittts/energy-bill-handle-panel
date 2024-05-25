FROM node:alpine

WORKDIR /usr/src/app

USER root

RUN apk update

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY prisma ./prisma/

COPY . .

EXPOSE 6667

RUN yarn build

CMD ["yarn", "start"]
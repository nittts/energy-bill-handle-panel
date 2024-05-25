FROM node:alpine

WORKDIR /usr/src/app

USER root

RUN apk update

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY prisma ./prisma/

COPY . .

EXPOSE 5554

RUN yarn build

CMD ["yarn", "start"]
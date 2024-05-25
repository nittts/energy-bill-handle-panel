FROM node:alpine

WORKDIR /usr/src/app

USER root

RUN apk update

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY prisma ./prisma/

COPY . .

ENV PORT 5553

EXPOSE 5553

RUN yarn build

CMD ["yarn", "start"]
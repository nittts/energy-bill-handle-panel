FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . . 

ENV BASE_URL="http://api:8080"

RUN yarn build

EXPOSE 5555

CMD ["yarn", "start"]
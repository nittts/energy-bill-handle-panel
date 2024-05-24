FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . . 

ENV VITE_BACK_END_URL="http://api:3333"

RUN yarn build

EXPOSE 5555

CMD ["yarn", "start"]
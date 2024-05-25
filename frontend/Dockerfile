FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . . 

ENV VITE_BACK_END_URL="http://localhost:5553"

RUN yarn build

EXPOSE 5553

CMD ["yarn", "start"]
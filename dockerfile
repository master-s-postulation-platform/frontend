FROM node:16.3.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install

EXPOSE 3006

COPY . ./

CMD ["npm", "start"]
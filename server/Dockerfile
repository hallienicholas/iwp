FROM node:alpine3.11
WORKDIR /IWP/server
COPY package.json .
COPY package-lock.json .
COPY . .
CMD ["npm", "run", "start"]
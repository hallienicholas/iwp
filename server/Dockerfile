FROM node:alpine3.11
WORKDIR /app/server
COPY package.json .
COPY package-loc.json .
COPY . .
CMD ["npm", "run", "start"]
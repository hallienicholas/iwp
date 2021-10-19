FROM node:alpine3.11
WORKDIR /app/client
COPY /package.json .
COPY /package-lock.json .
COPY . .
CMD ["npm", "run", "start"]
FROM node:alpine3.11
WORKDIR /app/client
COPY client/package.json .
COPY client/package-lock.json .
COPY . .
CMD ["npm", "run", "start"]
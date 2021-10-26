FROM node:alpine3.11
WORKDIR /app/server
COPY client/package.json .
COPY client/package-lock.json .
COPY . .
CMD ["npm", "run", "start"]
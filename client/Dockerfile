FROM node:alpine3.11
WORKDIR /app/client
COPY server/package.json .
COPY server/package-lock.json .
COPY . .
CMD ["npm", "run", "start"]
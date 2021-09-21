FROM node:alpine3.11
WORKDIR /app/server
COPY server/package.json .
COPY server/package-loc.json .
COPY . .
CMD ["npm", "run", "start"]
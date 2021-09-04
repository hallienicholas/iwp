FROM node:11
WORKDIR /dist
COPY package.json /dist
RUN npm install
COPY . /dist
CMD ["npm", "start"]
EXPOSE 3000
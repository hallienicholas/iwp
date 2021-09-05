FROM node:11.15.0
WORKDIR /dist
COPY package.json /dist
RUN npm install
COPY . /dist
CMD ["npm", "start"]
EXPOSE 3306
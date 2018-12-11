FROM node:8
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
CMD npm run serve